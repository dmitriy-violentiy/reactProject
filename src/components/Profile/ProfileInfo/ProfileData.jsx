import React from "react";
import classes from './ProfileInfo.module.css'

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

export default ProfileData;