import React from "react"

import DialogItem from "./DialogItem/DialogItem"
import classes from './Dialogs.module.css'
import Message from "./Message/Message"

const Dialogs = (props) => {
   let state = props.dialogsPage
   let dialogsElements = state.dialogs.map( (dialog) => { 
      return(
         <DialogItem name={dialog.name} id={dialog.id}/>
      ) 
   }) 

   let messagesElements = state.messages.map( (message) => {
      return(
         <Message message={message.messege} />
      )
   } )


   let newMessageArea = React.createRef();      //создаем ссылку, которая будет ссылаться на элемент в который поль-ль вводит текст (алерт). В alert через ref добавим эту ссылку

   
   
   let addMessage = () => {
      props.addMessage()
   }

   let onMessageChange = () => {
      let text = newMessageArea.current.value;
      props.updateNewMessageTextActionCreator(text)
   }

   

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

         <div className={classes.addMessage}>
            <div>
               <textarea ref={newMessageArea} onChange={onMessageChange} value={props.dialogsPage.newMessageText} />
            </div>
            <div>
               <button onClick={ addMessage }>Add message </button>
            </div>
         </div>

      </div>
   )
}

export default Dialogs;