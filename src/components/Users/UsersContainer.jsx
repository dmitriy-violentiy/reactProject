import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import axios from "axios";
import Users from './Users';
import preloader from '../../assets/images/preloader.gif';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
   componentDidMount() {      //этот метод встроен в React.Component и говорит компоненте что она была отрисована в HTML
      this.props.toggleIsFetching(true)      //когда еще ответ запроса не пришел, true (т.е. gif прелоадера отрабатывает)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {     //так при загрузке получаем пользователей
         this.props.toggleIsFetching(false)     //когда ответ на запрос пришел, выключаем gif прелоадера
         this.props.setUsers(response.data.items)
         this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true) 
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {     //так при загрузке получаем пользователей
         this.props.toggleIsFetching(false)    
         this.props.setUsers(response.data.items)
      })
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
               />
            </>
   }
}

let mapStateToProps = (state) => {
   return {
      users: state.usersPage.users,
      pageSize: state.usersPage.pageSize,
      totalUsersCount: state.usersPage.totalUsersCount,
      currentPage: state.usersPage.currentPage,
      isFetching: state.usersPage.isFetching
   }
}

/* let mapDispatchToProps = (dispatch) => {
   return {
      follow: (userId) => {
         dispatch(followActionCreator(userId))
      },
      unfollow: (userId) => {
         dispatch(unfollowActionCreator(userId))
      },
      setUsers: (users) => {
         dispatch(setUsersActionCreator(users))
      },
      setCurrentPage: (pageNumber) => {
         dispatch(setCurrentPageActionCreator(pageNumber))
      },
      setTotalUsersCount: (totalCount) => {
         dispatch(setUsersTotalCountActionCreator(totalCount))
      },
      toggleIsFetching: (isFetching) => {
         dispatch(toggleIsFetchingActionCreator(isFetching))
      }
   }
} */

export default connect(mapStateToProps, {
   follow,        //follow: followActionCreator (так было раньше. Сократили код)
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching
})(UsersContainer)