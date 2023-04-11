import React from "react";
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'


class Users extends React.Component {
   componentDidMount() {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {     //так при загрузке получаем пользователей
      this.props.setUsers(response.data.items)
      })
   }

   
   render() {
      return <div>  
      {
         this.props.users.map(users => <div key={users.id}>
            <span>
               <div>
                  <img src={ users.photos.small != null ? users.photos.small : userPhoto} className={styles.usersPhoto}/>
               </div>
               <div>
                  { users.followed ? <button onClick={() => {this.props.unfollow(users.id)}}>unfollow</button> : <button onClick={() => {this.props.follow(users.id)}}>follow</button> }
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
}

export default Users