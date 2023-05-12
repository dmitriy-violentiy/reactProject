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
            <div className={classes.descriptionBlock__avatar}>
               <div className={classes.descriptionBlock__image}><img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
                  <div className={classes.descriptionBlock__changeAvatar}>
                     <label className={classes.descriptionBlock__changeAvatar_label} for="files" >Select Image</label>
                     { isOwner &&  <input id="files" className={classes.descriptionBlock__changeAvatar_button} type={"file"} title="" onChange={onMainPhotoSelected} /> }
                  </div>
               </div>
               
            </div>

            <div className={classes.profileInfo__wrap}>
            <div className={classes.descriptionBlock__status}>
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>

            { editMode ? <ProfileDataForm initialValues={profile.aboutMe} profile={profile} onSubmit={onSubmit}/> 
            : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/> }
            
            </div>
            
         </div>
      </div>
   )
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
   return (
            <div>
               <div>
                  <b>Name:</b> {profile.fullName}
               </div>
               <div>
                  <div><b>A job status:</b> { profile.lookingForAJob ? 'looking for work' : 'not looking for a job' } </div>
               </div>
               <div>
                  <b>My professional skills:</b> { profile.lookingForAJobDescription }
               </div>
               <div>
                  <b>About me:</b> {profile.aboutMe}
               </div>
               { isOwner && <div><button onClick={goToEditMode} className={classes.descriptionBlock__changeInfoButton}>Change personal information</button></div> }
            </div>
   )
}

/* const Contact = ({contactTitle, contactValue}) => {
   return <div className={classes.contact}><b>{contactTitle}</b>: {contactValue}</div>
} */

export default ProfileInfo;