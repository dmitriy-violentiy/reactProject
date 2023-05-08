import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/avatar.png"

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {
   if (!profile) {
      return <Preloader/>
   }

   const onMainPhotoSelected = (e) => {
      if (e.target.files.length) {
         savePhoto(e.target.files[0])
      }
   } 

   return (
      <div>
         <div className={classes.descriptionBlock}>
            <div className={classes.descriptionBlock_avatar}>
               <img src={profile.photos.large || userPhoto} className={classes.mainPhoto}/>
               { isOwner && <input type={"file"} onChange={onMainPhotoSelected} /> }
            </div>
            <div>
               <div><b>Ник-нейм:</b> {profile.fullName}</div>
               {profile.aboutMe ? <div><b>Про меня:</b> {profile.aboutMe}</div> : <div></div>}
               {profile.contacts.vk ? <div><b>Мой вк:</b> {profile.contacts.vk}</div> : <div></div>}
               <div><b>Рабочий статус:</b> { profile.lookingForAJob ? 'В поисках работы' : 'Безработный' } </div>
               <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
         </div>
      </div>
   )
}

export default ProfileInfo;