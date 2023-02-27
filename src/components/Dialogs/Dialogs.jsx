import React from "react"
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
   return (
      <div className={classes.dialogs}>
         <div className={classes.dialogsItems}>
            <div className={classes.dialog + ' ' + classes.active}>
               Dmitriy
            </div>
            <div className={classes.dialog}>
               Oleg
            </div>
            <div className={classes.dialog}>
               Anton
            </div>
            <div className={classes.dialog}>
               Ivan
            </div>
            <div className={classes.dialog}>
               Egor
            </div>
            <div className={classes.dialog}>
               Anna
            </div>
         </div>
         <div className={classes.messages}>
            <div className={classes.message}>Hi</div>
            <div className={classes.message}>How are you?</div>
            <div className={classes.message}>Yo</div>
         </div>
      </div>
   )
}

export default Dialogs;