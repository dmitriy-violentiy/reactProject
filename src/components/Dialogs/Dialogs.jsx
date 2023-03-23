import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import DialogItem from "./DialogItem/DialogItem"
import classes from './Dialogs.module.css'
import Message from "./Message/Message"

const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogs.map( (dialog) => { 
      return(
         <DialogItem name={dialog.name} id={dialog.id}/>
      ) 
   }) 

   let messagesElements = props.dialogsPage.messages.map( (message) => {
      return(
         <Message message={message.messege} />
      )
   } )


   let newMessageArea = React.createRef();      //создаем ссылку, которая будет ссылаться на элемент в который поль-ль вводит текст (алерт). В alert через ref добавим эту ссылку

   
   
   let addMessage = () => {
     /*  let text = newMessageArea.current.value;  */  //считываем, что ввел пользователь в алерт, с помощью созданноый ссылки. Стерли т.к. значение введенное и так уже сидит в state
      props.dispatch(addMessageActionCreator())
   }

   let onMessageChange = () => {
      let text = newMessageArea.current.value;
      props.dispatch(updateNewMessageTextActionCreator(text))
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