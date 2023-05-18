/* import React from "react";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import classes from "./AddMessageForm.module.css"

const maxLength50 = maxLengthCreator(50)

export const AddMessageForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit} className={classes.addMessageForm}>
         <div>
            <Field className={classes.addMessageForm_textarea} component={Textarea} validate={[required, maxLength50]} name={"newMessageArea"} placeholder={"Enter you message"} />
         </div>
         <div>
            <button className={classes.addMessageForm_button}>Add message </button>
         </div>
      </form>
   ) 
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm) */

import React from "react";
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Field, reduxForm } from "redux-form";
import classes from "./AddMessageForm.module.css"
import { useForm } from "react-hook-form";

export const AddMessageForm = (props) => {
   const {
      register,
      formState: {
         errors,
         isValid
      },
      handleSubmit,
   } = useForm({
      mode: "onBlur",
   })

   return (
      <form onSubmit={handleSubmit(props.onSubmit)} className={classes.addMessageForm}>
         <div>
         <textarea className={classes.addMessageForm_textarea} placeholder="Enter you message" required
               {...register('newMessageArea', {})}
         />
         
         </div>
         <div>
            <button className={classes.addMessageForm_button} type="submit" disabled={!isValid}>send message</button>
         
         </div>
      </form>
   ) 
}

export default AddMessageForm