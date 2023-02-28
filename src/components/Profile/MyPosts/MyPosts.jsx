import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

   let postsData = [
      {id: 1, messege: "Hi! How are you?", likesCount: 45},
      {id: 2, messege: "I'm okey!", likesCount: 77},
   ]

   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea></textarea>
            </div>
            <div>
               <button>Add post </button>
            </div>
         </div>
         <div className={classes.posts}>
            <Post message={postsData[0].messege} like={postsData[0].likesCount}/>
            <Post message={postsData[1].messege} like={postsData[1].likesCount}/>
         </div>
      </div>
   )
}

export default MyPosts;