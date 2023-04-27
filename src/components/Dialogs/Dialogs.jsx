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

/* const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <div>
            <Field component={Textarea} validate={[required, maxLengthCreator(50)]} name={"newMessageArea"} placeholder={"Enter you message"} />
         </div>
         <div>
            <button>Add message </button>
         </div>
      </form>
   ) 
} */

/* const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm) */


export default Dialogs;