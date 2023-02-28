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

   let dialogs = [
      {id: 1, name: "Dmitriy"},
      {id: 2, name: "Oleg"},
      {id: 3, name: "Inna"},
      {id: 4, name: "Egor"},
      {id: 5, name: "Anna"},
      {id: 6, name: "Evgen"}
   ]

   let messages = [
      {id: 1, messege: "Hi"},
      {id: 2, messege: "How are you?"},
      {id: 3, messege: "Yo"},
      {id: 4, messege: "Hello"},
      {id: 5, messege: "By"},
      {id: 6, messege: "Maybe..."}
   ]

   //создали на сонове массива dialogs новый массив с данными имен и вывели их
   let dialogsElements = dialogs.map( (dialog) => { 
      return(
         <DialogItem name={dialog.name} id={dialog.id}/>
      ) 
   }) 

   //создали на сонове массива messages новый массив с данными имен и вывели их
   let messagesElements = messages.map( (message) => {
      return(
         <Message message={message.messege} />
      )
   } )


   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>

         {
            dialogsElements
         }

         </div>
         <div className={classes.messages}>
         {
            messagesElements
         }
         </div>
      </div>
   )
}

export default Dialogs;