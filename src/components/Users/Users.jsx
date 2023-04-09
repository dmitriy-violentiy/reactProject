import React from "react";
import styles from './users.module.css';


let Users = (props) => {

   if (props.users.length === 0) {
      props.setUsers([
         { id: 1, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png', followed: false, fullName: "Ivan", status: "I am a developer", location: {city: "Minsk", country: "Belarus"} },
         { id: 2, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png', followed: true, fullName: "Oleg", status: "I am a desiner", location: {city: "Moscow", country: "Russia"} },
         { id: 3, photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png', followed: true, fullName: "Olga", status: "I am a boss", location: {city: "Kazan", country: "Russia"} }
      ])
   }

   

   return <div>  {
         props.users.map(users => <div key={users.id}>
            <span>
               <div>
                  <img src={users.photoURL} className={styles.usersPhoto}/>
               </div>
               <div>
                  { users.followed ? <button onClick={() => {props.unfollow(users.id)}}>unfollow</button> : <button onClick={() => {props.follow(users.id)}}>follow</button> }
               </div>
            </span>
            <span>
               <span>
                  <div>{users.fullName}</div>
                  <div>{users.status}</div>
               </span>
               <span>
                  <div>{users.location.country}</div>
                  <div>{users.location.city}</div>
               </span>
            </span>
         </div>)
      }
   </div>
}

export default Users