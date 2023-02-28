import React from "react"
import { NavLink } from "react-router-dom";
import classes from './Dialogs.module.css'


const DialogItem = (props) => {
   return(
      <div className={classes.dialog + ' ' + classes.active}>
         <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return(
      <div className={classes.message}>{props.message}</div>
   )
}

const Dialogs = (props) => {

   let dialogsData = [
      {id: 1, name: "Dmitriy"},
      {id: 2, name: "Oleg"},
      {id: 3, name: "Inna"},
      {id: 4, name: "Egor"},
      {id: 5, name: "Anna"},
      {id: 6, name: "Evgen"}
   ]

   let messagesData = [
      {id: 1, messege: "Hi"},
      {id: 2, messege: "How are you?"},
      {id: 3, messege: "Yo"},
      {id: 4, messege: "Hello"},
      {id: 5, messege: "By"},
      {id: 6, messege: "Maybe..."}
   ]

   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            {/* <DialogItem name="Inna" id="3"/>
            <DialogItem name="Egor" id="4"/>
            <DialogItem name="Anna" id="5"/>
            <DialogItem name="Evgen" id="6"/> */}
         </div>
         <div className={classes.messages}>
            <Message message={messagesData[0].messege} />
            <Message message={messagesData[1].messege} />
         </div>
      </div>
   )
}

export default Dialogs;