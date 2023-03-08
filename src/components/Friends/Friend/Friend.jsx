import React from "react"
import { NavLink } from "react-router-dom";
import classes from './../Friends.module.css'

const Friend = (props) => {
   return(
      <div className={classes.friend}>
         <div className={classes.friendAvatar}><img src='https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg' alt="avatar"/></div>
         <div><NavLink to={"/friend/" + props.id}>{props.friend}</NavLink></div>
      </div>
   )
}

export default Friend;