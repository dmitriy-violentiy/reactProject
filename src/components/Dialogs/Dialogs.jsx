import React from "react"
import DialogItem from "./DialogItem/DialogItem"
import classes from './Dialogs.module.css'
import Message from "./Message/Message"

const Dialogs = (props) => {

   let dialogsElements = props.state.dialogs.map( (dialog) => { 
      return(
         <DialogItem name={dialog.name} id={dialog.id}/>
      ) 
   }) 

   let messagesElements = props.state.messages.map( (message) => {
      return(
         <Message message={message.messege} />
      )
   } )


   let newMessageArea = React.createRef();
   let addMessage = () => {
      let text = newMessageArea.current.value;
      alert(text)
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
               <textarea ref={newMessageArea}></textarea>
            </div>
            <div>
               <button onClick={ addMessage }>Add message </button>
            </div>
         </div>

      </div>
   )
}

export default Dialogs;