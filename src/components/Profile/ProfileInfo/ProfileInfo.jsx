import React, { useState } from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/avatar.png"
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

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
                     { isOwner && <label className={classes.descriptionBlock__changeAvatar_label} for="files" >Select Image</label>}
                     { isOwner && <input id="files" className={classes.descriptionBlock__changeAvatar_button} type={"file"} title="" onChange={onMainPhotoSelected} /> }
                  </div> 
               </div>
               
            </div>

            <div className={classes.profileInfo__wrap}>
               <div className={classes.descriptionBlock__status}>
                  <ProfileStatus status={status} updateStatus={updateStatus}/>
               </div>
               { editMode ? <ProfileDataForm initialValues={profile.aboutMe} profile={profile} onSubmit={onSubmit}/> 
               : <ProfileData goToEditMode={() => {setEditMode(true)}} profile={profile} isOwner={isOwner}/> }
            </div>
            
         </div>
      </div>
   )
}

export default ProfileInfo;