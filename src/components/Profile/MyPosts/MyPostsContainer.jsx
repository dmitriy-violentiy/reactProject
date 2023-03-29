import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";
import MyPosts from "./MyPosts";

const MyPostsContainer = () => {

   return (
      <StoreContext.Consumer> 
         {                       //важно переносить фигурную скобку на новую строку!!!!!!
         (store) => {
         //let state = store.getState()
          //функция, которая считывает, что ввел пользователь
         let addPost = () => {
            store.dispatch(addPostActionCreator())
         }
         let onPostChange = (text) => {
            let action = updateNewPostTextActionCreator(text)
            store.dispatch(action)
            
         }
         return <MyPosts updateNewPostText={onPostChange} addPost={addPost} 
                        posts={store.getState().profilePage.posts} 
                        newPostText={store.getState().profilePage.newPostText}/>
         }
         
      }  
                  </StoreContext.Consumer>
   )
}

export default MyPostsContainer;