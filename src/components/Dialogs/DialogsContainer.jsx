import React from "react"
import { connect } from "react-redux"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"

const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageTextActionCreator: (text) => {
         let action = updateNewMessageTextActionCreator(text)
         dispatch(action)
      },
      addMessage: () => {
         dispatch(addMessageActionCreator())
      }
   }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;