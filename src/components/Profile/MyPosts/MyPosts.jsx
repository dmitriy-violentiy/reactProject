import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
   return (
      <div>
         My posts
         <div>
            New post
         </div>
         <div className={classes.posts}>
            <Post message="Hi! How are you?" like="77"/>
            <Post message="I'm okey!" like="89"/>
         </div>
      </div>
   )
}

export default MyPosts;