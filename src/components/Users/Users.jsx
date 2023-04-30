import React from "react";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/avatar.png"
import { NavLink } from "react-router-dom";

let  Users = (props) => {
   
   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i=1; i <= pagesCount; i++) {
      pages.push(i)
   }



   //карусель количества переключения страниц
   let curP = props.currentPage;
   let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
   let curPL = curP + 5;
   let slicedPages = pages.slice( curPF, curPL);
   
   return <div>  
            <div>
               {slicedPages.map(pages => {
                  return <span className={props.currentPage === pages && styles.selectedPage} onClick={(e) => { props.onPageChanged(pages) }}>{pages}</span>
               })}
            </div>
            {
               props.users.map(users => <div key={users.id}>
                  <span>
                     <div>
                        <NavLink to={'/profile/' + users.id}>
                           <img src={ users.photos.small != null ? users.photos.small : userPhoto} className={styles.usersPhoto} alt="avatar"/>
                        </NavLink>
                     </div>
                     <div>
                        { users.followed ? 
                           <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => { props.unfollow(users.id )}}>unfollow</button> : 
                           <button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => { props.follow(users.id )}}>follow</button> }
                     </div>
                  </span>
                  <span>
                     <span>
                        <div>{users.name}</div>
                        <div>{users.status}</div>
                     </span>
                     <span>
                        <div>{"users.location.country"}</div>
                        <div>{"users.location.city"}</div>
                     </span>
                  </span>
               </div>)
            }
         </div>
}

export default Users