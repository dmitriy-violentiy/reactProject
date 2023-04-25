import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'



let initialState = {
      posts: [
         { id: 1, messege: "Hi! How are you?", likesCount: 45 },
         { id: 2, messege: "I'm okey!", likesCount: 77 },
      ],
      newPostText: "add new text",
      profile: null,
      status: ""
}

const profileReducer = (state = initialState, action) => {

   switch(action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            messege: state.newPostText,
            likesCount: 1
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
         }
      }
      case UPDATE_NEW_POST_TEXT: {
         return {
            ...state,
            newPostText: action.newText      //присваимваем новое значение в state, которое получили от пользователя
         }  
      }
      case SET_USER_PROFILE: {
         return {
            ...state,
            profile: action.profile
         }
      }
      case SET_STATUS: {
         return {
            ...state,
            status: action.status
         }
      }
      default:
         return state       
   }
} 

export const addPostActionCreator = () => {
   return {
      type: ADD_POST
   }
}

export const updateNewPostTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text
   }
}

export const setUserProfile = (profile) => {
   return {
      type: SET_USER_PROFILE,
      profile
   }
}

export const setStatus = (status) => {
   return {
      type: SET_STATUS,
      status
   }
}

export const getUserProfile = (userId) => (dispatch) => {
   usersAPI.getProfile(userId)
   .then((res) => {
      dispatch(setUserProfile(res.data));
   });
}

export const getStatus = (userId) => (dispatch) => {
   profileAPI.getStatus(userId)
   .then((response) => {
      dispatch(setStatus(response.data));
   });
}

export const updateStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status)
   .then((response) => {
      if (response.data.resultCode === 0) {
         dispatch(setStatus(status));
      }
   });
}

export default profileReducer;