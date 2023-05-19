import React from "react"
import classes from './ProfileDataForm.module.css'
import { useForm } from "react-hook-form"

const ProfileDataForm = ({profile, ...props}) => {
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
      <form onSubmit={handleSubmit(props.onSubmit)} className={classes.profileDataForm}>
         <div>
            <div><b>Name:</b></div><input className={classes.profileDataForm__nameInput} placeholder="Full name" defaultValue={profile.fullName} {...register('fullName', {required: true})} required />
         </div>
         <div className={classes.profileDataForm__jobInput_wrap}>
            <b>A job status:</b> <input className={classes.profileDataForm__jobInput} placeholder="" defaultValue={profile.lookingForAJob} type="checkbox" {...register('lookingForAJob', {})} />
         </div>
         <div>
            <div><b>My professional skills:</b></div> <textarea className={classes.profileDataForm__skillsInput} placeholder="My professional skills" defaultValue={profile.lookingForAJobDescription} {...register('lookingForAJobDescription', {required: true})} required />
         </div>
         <div>
            <div></div><b>About me:</b><div/> <textarea className={classes.profileDataForm__aboutInput} placeholder="About me" defaultValue={profile.aboutMe} {...register('aboutMe', {required: true})} required />
         </div>
         <input className={classes.profileDataForm__button} type="submit"/>
      </form>
   )
}
export default ProfileDataForm