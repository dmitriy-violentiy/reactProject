import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { requestUsers } from "../../redux/users-reducer"
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {
   componentDidMount() {      //этот метод встроен в React.Component и говорит компоненте что она была отрисована в HTML
      this.props.requestUsers(this.props.currentPage, this.props.pageSize)  //берем из users-reducer thunk. Присвоили в export
   }

   onPageChanged = (pageNumber) => {
      this.props.requestUsers(pageNumber, this.props.pageSize)
   }

   render() {
      return <>
         { this.props.isFetching ? <Preloader /> : null }
               <Users  totalUsersCount={this.props.totalUsersCount} 
                           pageSize={this.props.pageSize} 
                           currentPage={this.props.currentPage} 
                           onPageChanged={this.onPageChanged}
                           users={this.props.users}
                           follow={this.props.follow}
                           unfollow={this.props.unfollow}
                           followingInProgress={this.props.followingInProgress}
               />
            </>
   }
}

/* let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
   }
} */

let mapStateToProps = (state) => {
   return {
      users: getUsers(state),
      pageSize: getPageSize(state),
      totalUsersCount: getTotalUsersCount(state),
      currentPage: getCurrentPage(state),
      isFetching: getIsFetching(state),
      followingInProgress: getFollowingInProgress(state)
   }
}

//раньше мы делали так
/* let withRedirect = withAuthRedirect(UsersContainer)   //с  помощью hoc проверяем авторизованность пользователя */
/* export default connect(mapStateToProps, {
   follow,        //follow: followActionCreator (так было раньше. Сократили код)
   unfollow,
   setCurrentPage,
   toggleFollowingProgress,
   getUsers
})(withRedirect) */

//теперь используем compose
export default compose(
   connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)