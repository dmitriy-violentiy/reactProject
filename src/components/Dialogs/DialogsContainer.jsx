import React from "react"
import { connect } from "react-redux"
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import { Navigate } from "react-router-dom"
import { withAuthRedirect } from "../../hoc/withAuthRedirect"
import { compose } from "redux"

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

export default compose(
   connect(mapStateToProps, mapDispatchToProps),
   withAuthRedirect
)(Dialogs);