import React from "react"
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

export default ProfileDataFormReduxForm