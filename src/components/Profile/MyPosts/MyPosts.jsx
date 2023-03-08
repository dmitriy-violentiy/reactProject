import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {

   //создали новый массив объектов на основе массива posts, который выведет столько постов, сколько придет 
   let postsElements = props.posts.map( (post) => {
      return(
         <Post message={post.messege} like={post.likesCount}/>
      )
   } )


   let newPostElement = React.createRef();   //создали ссылку и положили ее в переменную

   //функция, которая считывает, что ввел пользователь
   let addPost = () => {
      let text = newPostElement.current.value;
      props.addPost(text)
      newPostElement.current.value = '' //обнулили строку после нажатия кнопки
   }

   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea ref={newPostElement}></textarea>
            </div>
            <div>
               <button onClick={ addPost }>Add post </button>
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