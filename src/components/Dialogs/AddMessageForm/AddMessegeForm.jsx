import React from "react";
import classes from "./AddMessageForm.module.css"
import { useForm } from "react-hook-form";

const AddMessageForm = ({onSubmit}) => {
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
      <form onSubmit={handleSubmit(onSubmit)} className={classes.addMessageForm}>
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