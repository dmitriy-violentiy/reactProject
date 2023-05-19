import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, unfollow, toggleFollowingProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { requestUsers } from "../../redux/users-reducer"
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';
import classes from "./users.module.css"

const UsersContainer = ({ currentPage, pageSize, requestUsers, users, totalUsersCount, isFetching, follow, unfollow, followingInProgress }) => {

   useEffect( () => {
      requestUsers(currentPage, pageSize)
   }, [])

   const onPageChanged = (pageNumber) => {
      requestUsers(pageNumber, pageSize)
   }

   return <>
      { isFetching ? <div className={classes.usersPreloader}><Preloader /></div> : null }
            <Users  totalUsersCount={totalUsersCount} 
                        pageSize={pageSize} 
                        currentPage={currentPage} 
                        onPageChanged={onPageChanged}
                        users={users}
                        follow={follow}
                        unfollow={unfollow}
                        followingInProgress={followingInProgress}
            />
         </>
}

const mapStateToProps = (state) => {
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