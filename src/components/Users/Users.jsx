import React from "react";
import Paginator from "../common/paginator/Paginator";
import User from "./User";
import classes from "./users.module.css"

let Users = ({currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props}) => {
   
   return <div className={classes.usersWrap}>  
      <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount} pageSize={pageSize}/>
      <div className={classes.users}>
      {
         users.map(users => <User user={users} followingInProgress={props.followingInProgress} unfollow={props.unfollow} follow={props.follow}  key={users.id}/>)                                                                                                                                                               
      }
      </div>
   </div>
}

export default Users