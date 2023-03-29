import React from "react"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import StoreContext from "../../StoreContext"
import DialogItem from "./DialogItem/DialogItem"
import Dialogs from "./Dialogs"
import classes from './Dialogs.module.css'
import Message from "./Message/Message"

const DialogsContainer = () => {
   
   return <StoreContext.Consumer>
      {                              //важно переносить фигурную скобку на новую строку!!!!!!
      (store) => {
         let state = store.getState().dialogsPage
      
         let addMessage = () => {
            store.dispatch(addMessageActionCreator())
         }
   
         let onMessageChange = (text) => {
            store.dispatch(updateNewMessageTextActionCreator(text))
         }
         return <Dialogs updateNewMessageTextActionCreator={onMessageChange} 
                        addMessage={addMessage} 
                        dialogsPage={state}/>

      }
      
   }
      </StoreContext.Consumer>
}

export default DialogsContainer;