import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";


let AddNewPostForm = (props) => {
   //когда данные собраны, вызываем функцию handleSubmit, которая перерисовывает каждое действие
   return(
      <form onSubmit={props.handleSubmit}>      
         <div>
            <Field name="newPostText" component={Textarea} placeholder="Post message" validate={[required, maxLengthCreator(10)]} />
         </div>
         <div>
            <button>Add post </button>
         </div>
      </form>
   )
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)      //обернули AddNewPostForm в reduxForm, дали уникальное имя
const MyPosts = React.memo((props) => {

   //использовалось в классовых компонентах
   /* shouldComponentUpdate(nextProps, nextState) {
      return nextProps != this.props || nextState != this.state 
   } */
   
      console.log('xxx');

      //создали новый массив объектов на основе массива posts, который выведет столько постов, сколько придет 
      let postsElements = props.posts.map( (post) => {
         return(
            <Post message={post.messege} like={post.likesCount} key={post.id}/>
         )
      } )

      //функция, которая считывает, что ввел пользователь
      let onAddPost = (values) => {
         props.addPost(values.newPostText)
      }

      return (
         <div className={classes.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost}/>
            <div className={classes.posts}>
               {
                  postsElements
               }
            </div>
         </div>
      )
   
})



export default MyPosts;