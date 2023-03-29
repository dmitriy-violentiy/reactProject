import React from "react"
import { connect } from "react-redux"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import DialogItem from "./DialogItem/DialogItem"
import Dialogs from "./Dialogs"
import classes from './Dialogs.module.css'
import Message from "./Message/Message"

let mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
let mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageTextActionCreator: (text) => {
         dispatch(updateNewMessageTextActionCreator(text))
      },
      addMessage: () => {
         dispatch(addMessageActionCreator())
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;