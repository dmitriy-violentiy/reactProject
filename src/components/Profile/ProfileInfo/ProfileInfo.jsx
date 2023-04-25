import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader/>
   }
   return (
      <div>
         {/* <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLxFjUcaAweJbzadOhLFqKGAX9zq-t2tp2TYqxl4cdOhlSlupOqt6nKB8mihSw2HbX4s&usqp=CAU"/>
         </div> */}
         <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.small !== null ? props.profile.photos.large : 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png' } width='150px'/>
            <div><b>Полное имя:</b> {props.profile.fullName}</div>
            <div><b>Про меня:</b> {props.profile.aboutMe}</div>
            <div><b>Мой вк:</b> {props.profile.contacts.vk}</div>
            <div><b>Работа:</b> { props.profile.lookingForAJob ? 'в поисках работы' : 'бездельничаю' } </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
         </div>
      </div>
   )
}

export default ProfileInfo;