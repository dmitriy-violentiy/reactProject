import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { requestUsers } from "../../redux/users-reducer"
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';
import classes from "./users.module.css"

const UsersContainer = (props) => {

   useEffect( () => {
      props.requestUsers(props.currentPage, props.pageSize)
   }, [])

   const onPageChanged = (pageNumber) => {
      props.requestUsers(pageNumber, props.pageSize)
   }

   return <>
      { props.isFetching ? <div className={classes.usersPreloader}><Preloader /></div> : null }
            <Users  totalUsersCount={props.totalUsersCount} 
                        pageSize={props.pageSize} 
                        currentPage={props.currentPage} 
                        onPageChanged={onPageChanged}
                        users={props.users}
                        follow={props.follow}
                        unfollow={props.unfollow}
                        followingInProgress={props.followingInProgress}
            />
         </>
}

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

export default compose(
   connect(mapStateToProps, { follow, unfollow, setCurrentPage, toggleFollowingProgress, requestUsers})
)(UsersContainer)