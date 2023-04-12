import React from "react";
import styles from './users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/avatar.png'


class Users extends React.Component {
   componentDidMount() {      //этот метод встроен в React.Component и говорит компоненте что она была отрисована в HTML
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {     //так при загрузке получаем пользователей
      this.props.setUsers(response.data.items)
      this.props.setTotalUsersCount(response.data.totalCount)
      })
   }

   onPageChanged = (pageNumber) => {
      this.props.setCurrentPage(pageNumber)
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {     //так при загрузке получаем пользователей
      this.props.setUsers(response.data.items)
      })
   }

   render() {

      let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
      let pages = []
      for (let i=1; i <= pagesCount; i++) {
         pages.push(i)
      }
      //карусель количества переключения страниц
      let curP = this.props.currentPage;
      let curPF = ((curP - 5) < 0) ?  0  : curP - 5 ;
      let curPL = curP + 5;
      let slicedPages = pages.slice( curPF, curPL);

      return <div>  
      <div>
         {slicedPages.map(pages => {
            return <span className={this.props.currentPage === pages && styles.selectedPage} onClick={(e) => { this.onPageChanged(pages) }}>{pages}</span>
         })}
      </div>
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