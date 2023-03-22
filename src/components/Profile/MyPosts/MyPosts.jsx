import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
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
      props.dispatch(addPostActionCreator())
     /*  props.updateNewPostText('') */   //зачистим в BLL
   }

   let onPostChange = () => {
      let text = newPostElement.current.value;
      //props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
      props.dispatch(updateNewPostTextActionCreator(text))
      
   }

   return (
      <div className={classes.postsBlock}>
         <h3>My posts</h3>
         <div>
            <div>
               <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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