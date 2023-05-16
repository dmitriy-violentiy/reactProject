/* import React from "react"
import { Input, Textarea } from "../../common/FormsControls/FormsControls"
import { Field, reduxForm } from "redux-form"
import classes from './ProfileDataForm.module.css'

const ProfileDataForm = ({handleSubmit}) => {
   return (
      <form onSubmit={handleSubmit} className={classes.profileDataForm}>
         <div>
            <b>Name:</b> <Field className={classes.profileDataForm__nameInput} placeholder="Full name" name="fullName" validators={[]} component={Input}></Field>
         </div>
         <div className={classes.profileDataForm__jobInput_wrap}>
            <b>A job status:</b> <Field className={classes.profileDataForm__jobInput} placeholder="" name="lookingForAJob" validators={[]} component={Input} props={{type: "checkbox"}}></Field>
         </div>
         <div>
            <b>My professional skills:</b> <Field className={classes.profileDataForm__skillsInput} placeholder="My professional skills" name="lookingForAJobDescription" validators={[]} component={Textarea}></Field>
         </div>
         <div>
            <b>About me:</b> <Field className={classes.profileDataForm__aboutInput} placeholder="About me" name="aboutMe" validators={[]} component={Textarea}></Field>
         </div>
         <div><button className={classes.profileDataForm__button}>save</button></div>
      </form>
   )
}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm */

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
            <b>Name:</b> 
               <label title={errors?.fullName}>
                  <input className={classes.profileDataForm__nameInput} placeholder="Full name" defaultValue={profile.fullName} {...register('fullName', {required: true})} required />
               </label>
         </div>
         <div className={classes.profileDataForm__jobInput_wrap}>
            <b>A job status:</b> <input className={classes.profileDataForm__jobInput} placeholder="" defaultValue={profile.lookingForAJob} type="checkbox" {...register('lookingForAJob', {})} />
         </div>
         <div>
            <b>My professional skills:</b> <textarea className={classes.profileDataForm__skillsInput} placeholder="My professional skills" defaultValue={profile.lookingForAJobDescription} {...register('lookingForAJobDescription', {required: true})} required />
         </div>
         <div>
            <b>About me:</b> <textarea className={classes.profileDataForm__aboutInput} placeholder="About me" defaultValue={profile.aboutMe} {...register('aboutMe', {required: true})} required />
         </div>
         <input className={classes.profileDataForm__button} type="submit"/>
      </form>
   )
}
export default ProfileDataForm