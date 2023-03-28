import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import DialogItem from "./DialogItem/DialogItem"
import Dialogs from "./Dialogs"
import classes from './Dialogs.module.css'
import Message from "./Message/Message"

const DialogsContainer = (props) => {

   let state = props.store.getState().dialogsPage
   
   let addMessage = () => {
      props.store.dispatch(addMessageActionCreator())
   }

   let onMessageChange = (text) => {
      props.store.dispatch(updateNewMessageTextActionCreator(text))
   }

   

   return (
      <Dialogs updateNewMessageTextActionCreator={onMessageChange} addMessage={addMessage} 
               dialogsPage={state}/>
   )
}

export default DialogsContainer;