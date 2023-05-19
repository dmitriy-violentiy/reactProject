import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import AddNewPostForm from "./AddNewPostForm";

const MyPosts = ({posts, addPost}) => {

   //создали новый массив объектов на основе массива posts, который выведет столько постов, сколько придет 
   const postsElements = posts.map( (post) => {
      return(
         <Post message={post.messege} like={post.likesCount} key={post.id}/>
      )
   } )

   //функция, которая считывает, что ввел пользователь
   const onAddPost = (values) => {
      addPost(values.newPostText)
   }

   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <AddNewPostForm onSubmit={onAddPost}/>
         <div className={classes.posts}>
            {
               postsElements
            }
         </div>
      </div>
   )
   
}

export default MyPosts;