import { profileAPI, usersAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'



let initialState = {
      posts: [
         { id: 1, messege: "Hi! How are you?", likesCount: 45 },
         { id: 2, messege: "I'm okey!", likesCount: 77 },
      ],
      profile: null,
      status: ""
}

const profileReducer = (state = initialState, action) => {

   switch(action.type) {
      case ADD_POST: {
         let newPost = {
            id: 5,
            messege: action.newPostText,
            likesCount: 1
         };
         return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
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

export const addPostActionCreator = (newPostText) => {
   return {
      type: ADD_POST,
      newPostText
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