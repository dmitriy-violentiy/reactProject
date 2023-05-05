import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
   if (!profile) {
      return <Preloader/>
   }
   return (
      <div>
         <div className={classes.descriptionBlock}>
            <div className={classes.descriptionBlock_avatar}>
               <img src={profile.photos.small !== null ? profile.photos.large : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png' } width='150px'/>
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