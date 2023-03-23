const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {

   switch(action.type) {
      case ADD_POST:  
         let newPost = {
         id: 5,
         messege: state.newPostText,
         likesCount: 1,
         };
         state.posts.push(newPost);
         state.newPostText = '';
         return state
      case UPDATE_NEW_POST_TEXT:
         state.newPostText = action.newText      //присваимваем новое значение в state, которое получили от пользователя
         return state
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

export default profileReducer;