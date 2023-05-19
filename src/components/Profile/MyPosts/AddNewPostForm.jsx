import React from "react";
import classes from './MyPosts.module.css'
import { useForm } from "react-hook-form";

const AddNewPostForm = ({onSubmit}) => {
   //когда данные собраны, вызываем функцию handleSubmit, которая перерисовывает каждое действие
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
   return(
      <form onSubmit={handleSubmit(onSubmit)}>      
         <div>
            <textarea className={classes.myposts_textarea} placeholder="Post message" required
            {...register('newPostText', {
               
            })} />
         </div>
         <div>
            <button type="submit" className={classes.myposts_button}>add post</button>
         </div>
      </form>
   )
}

export default AddNewPostForm;