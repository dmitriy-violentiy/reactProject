import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, setTotalUsersCount, toggleIsFetching, unfollow } from '../../redux/users-reducer';
import axios from "axios";
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {
   componentDidMount() {      //этот метод встроен в React.Component и говорит компоненте что она была отрисована в HTML
      this.props.toggleIsFetching(true)      //когда еще ответ запроса не пришел, true (т.е. gif прелоадера отрабатывает)
      
      usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {     //так при загрузке получаем пользователей
         this.props.toggleIsFetching(false)     //когда ответ на запрос пришел, выключаем gif прелоадера
         this.props.setUsers(data.items)
         this.props.setTotalUsersCount(data.totalCount)
      })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      this.props.toggleIsFetching(true)

      usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {     //так при загрузке получаем пользователей
         this.props.toggleIsFetching(false)    
         this.props.setUsers(data.items)
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

export default connect(mapStateToProps, {
   follow,        //follow: followActionCreator (так было раньше. Сократили код)
   unfollow,
   setUsers,
   setCurrentPage,
   setTotalUsersCount,
   toggleIsFetching
})(UsersContainer)