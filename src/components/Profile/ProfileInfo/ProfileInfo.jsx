import React from "react";
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLxFjUcaAweJbzadOhLFqKGAX9zq-t2tp2TYqxl4cdOhlSlupOqt6nKB8mihSw2HbX4s&usqp=CAU"/>
         </div>
         <div className={classes.descriptionBlock}>
            ava + descr
         </div>
      </div>
   )
}

export default ProfileInfo;