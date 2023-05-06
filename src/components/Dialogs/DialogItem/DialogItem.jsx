import React from "react"
import { NavLink } from "react-router-dom";
import classes from './../Dialogs.module.css'


const DialogItem = ({id, name}) => {
   return(
      <div className={classes.dialog + ' ' + classes.active}>
         <div className={classes.user}>
            <div className={classes.userAvatar}><img src='https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg' alt="avatar"/></div>
            <div className={classes.wrap_userName}><NavLink  className={classes.userName} to={"/dialogs/" + id}>{name}</NavLink></div>
         </div>
      </div>
   )
}

export default DialogItem;