import React from "react";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/avatar.png"
import { NavLink } from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {
   return   (<div className={styles.user}>
      <span>
         <div>
            <NavLink to={'/profile/' + user.id}>
               <img src={ user.photos.small != null ? user.photos.small : userPhoto} className={styles.usersPhoto} alt="avatar"/>
            </NavLink>
         </div>
         <div>
            { user.followed ? 
               <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { unfollow(user.id )}}>unfollow</button> : 
               <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => { follow(user.id )}}>follow</button> }
         </div>
      </span>
      <span>
         <span>
            <div>{user.name}</div>
            <div>{user.status}</div>
         </span>
         <span>
            <div>{"users.location.country"}</div>
            <div>{"users.location.city"}</div>
         </span>
      </span>
   </div>)
}

export default User