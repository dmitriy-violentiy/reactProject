import React, { useState } from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/avatar.png"
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
   
   let [editMode, setEditMode]= useState(false)
   
   if (!profile) {
      return <Preloader/>
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0])
      }
   }

   const onSubmit = (formData) => {
      saveProfile(formData)
      setEditMode(false)
   }

   return (
      <div>
         <div className={classes.descriptionBlock}>
            <div className={classes.descriptionBlock_avatar}>
               <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
               { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
            </div>

            { editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/> }

            <div>
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
            
         </div>
      </div>
   )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
   return (
            <div>
               { isOwner && <div><button onClick={goToEditMode}>edit</button></div> }
               <div>
                  <b>Name:</b> {profile.fullName}
               </div>
               <div>
                  <b>About me:</b> {profile.aboutMe}
               </div>
          {/*      <div>
                  <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                     return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>      
                  })}
               </div> */}
               <div>
                  <div><b>A job status:</b> { profile.lookingForAJob ? 'looking for work' : 'not looking for a job' } </div>
               </div>
               <div>
                  <b>My professional skills:</b> { profile.lookingForAJobDescription }
               </div>  
               
            </div>
   )
}

const Contact = ({contactTitle, contactValue}) => {
   return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;