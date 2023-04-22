import React from "react"
import { connect } from "react-redux"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import { Navigate } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"

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


let AuthRedirectComponent = withAuthRedirect(Dialogs)    //с  помощью hoc проверяем авторизованность пользователя

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default DialogsContainer;