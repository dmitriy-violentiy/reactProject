import React from "react"
import { Input, Textarea } from "../../common/FormsControls/FormsControls"
import { Field, reduxForm } from "redux-form"

const ProfileDataForm = ({handleSubmit}) => {
   return (
      <form onSubmit={handleSubmit}>
         <div><button>save</button></div>
         <div>
            <b>Name:</b> <Field placeholder="Full name" name="fullName" validators={[]} component={Input}></Field>
         </div>
         <div>
            <b>About me:</b> <Field placeholder="About me" name="aboutMe" validators={[]} component={Textarea}></Field>
         </div>
         <div>
            <b>A job status:</b> <Field placeholder="" name="lookingForAJob" validators={[]} component={Input} props={{type: "checkbox"}}></Field>
         </div>
         <div>
            <b>My professional skills:</b> <Field placeholder="My professional skills" name="lookingForAJobDescription" validators={[]} component={Textarea}></Field>
         </div>
         

      </form>
   )

}

const ProfileDataFormReduxForm = reduxForm({ form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm