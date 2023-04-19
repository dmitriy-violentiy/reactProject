import React from "react";
import styles from "./users.module.css"
import userPhoto from "../../assets/images/avatar.png"
import { NavLink } from "react-router-dom";
import axios from "axios";

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
                           <button onClick={() => {
                              
                              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {   //для отписки шлем delete запрос
                                 withCredentials: true,  //авторизованность
                                 headers: {
                                    "API-KEY": "2bced714-6c0d-4aab-9443-c0e68585a0ba"     //синтаксис берем из документации
                                 }
                              })
                              .then(response => {     //запрос на подписку
                                 if (response.data.resultCode == 0) {   //data и resultCode посмотрели в документации API. Условие если сервер подтвердил отписку
                                    props.unfollow(users.id)
                                 }
                              })

                           }}>unfollow</button> : 
                           <button onClick={() => {
                              
                              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {}, {
                                 withCredentials: true,
                                 headers: {
                                    "API-KEY": "2bced714-6c0d-4aab-9443-c0e68585a0ba"     //синтаксис берем из документации
                                 }
                              })
                              .then(response => {     //запрос на подписку
                                 if (response.data.resultCode == 0) {   //data и resultCode посмотрели в документации API. Условие если сервер подтвердил подписку
                                    props.follow(users.id)
                                 }
                              })
                              
                              }}>follow</button> }
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