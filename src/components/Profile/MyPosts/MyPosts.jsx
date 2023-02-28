import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

   let posts = [
      {id: 1, messege: "Hi! How are you?", likesCount: 45},
      {id: 2, messege: "I'm okey!", likesCount: 77},
   ]

   //создали новый массив объектов на основе массива posts, который выведет столько постов, сколько придет 
   let postsElements = posts.map( (post) => {
      return(
         <Post message={post.messege} like={post.likesCount}/>
      )
   } )

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
            {
               postsElements
            }
         </div>
      </div>
   )
}

export default MyPosts;