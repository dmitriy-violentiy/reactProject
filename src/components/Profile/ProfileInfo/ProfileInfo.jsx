import React from "react";
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader/>
   }
   return (
      <div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLxFjUcaAweJbzadOhLFqKGAX9zq-t2tp2TYqxl4cdOhlSlupOqt6nKB8mihSw2HbX4s&usqp=CAU"/>
         </div>
         <div className={classes.descriptionBlock}>
            <img src={props.profile.photos.large}/>
            <div><b>Полное имя:</b> {props.profile.fullName}</div>
            <div><b>Про меня:</b> {props.profile.aboutMe}</div>
            <div><b>Мой вк:</b> {props.profile.contacts.vk}</div>
         </div>
      </div>
   )
}

export default ProfileInfo;