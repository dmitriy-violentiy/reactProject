import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'

const Profile = () => {
   return (
      <div>
      <div>
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLxFjUcaAweJbzadOhLFqKGAX9zq-t2tp2TYqxl4cdOhlSlupOqt6nKB8mihSw2HbX4s&usqp=CAU"/>
      </div>
      <div>
         ava + descr
      </div>
      <MyPosts />
   </div>
   )
}

export default Profile;