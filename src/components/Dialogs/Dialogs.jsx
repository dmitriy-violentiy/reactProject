import React from "react"
import DialogItem from "./DialogItem/DialogItem"
import classes from './Dialogs.module.css'
import Message from "./Message/Message"
import { Navigate } from "react-router-dom"
import AddMessageForm from "./AddMessageForm/AddMessegeForm"

const Dialogs = (props) => {
   let state = props.dialogsPage
   let dialogsElements = state.dialogs.map( (dialog) => { 
      return(
         <DialogItem name={dialog.name} key={dialog.id} id={dialog.id}/>
      ) 
   }) 

   let messagesElements = state.messages.map( (message) => {
      return(
         <Message message={message.messege} key={message.id}/>
      )
   } )

   let addNewMessage = (values) => {
      props.addMessage(values.newMessageArea)
   }

   if (!props.isAuth) return <Navigate to={'/login'}/>       //редиректим если не залогинен

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
            <AddMessageForm onSubmit={ addNewMessage } />
      </div>
      
   )
}

export default Dialogs;