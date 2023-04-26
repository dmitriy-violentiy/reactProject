import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {            //перерисовываем компоненту myPosts когда изменится posts
   return {
      posts: state.profilePage.posts,
      newPostText: state.profilePage.newPostText
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addPost: (newPostText) => {
         dispatch(addPostActionCreator(newPostText))
      }
   }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)      //каждый раз когда происходят изменения в state запускается эта функция

export default MyPostsContainer;