const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState = {
      posts: [
         { id: 1, messege: "Hi! How are you?", likesCount: 45 },
         { id: 2, messege: "I'm okey!", likesCount: 77 },
      ],
      newPostText: 'add new text'
}

const profileReducer = (state = initialState, action) => {

   switch(action.type) {
      case ADD_POST: {
         let newPost = {
         id: 5,
         messege: state.newPostText,
         likesCount: 1,
         };
         let stateCopy = {...state}
         stateCopy.posts = [...state.posts]
         stateCopy.posts.push(newPost)
         stateCopy.newPostText = '';
         return stateCopy
      }
      case UPDATE_NEW_POST_TEXT: {
         let stateCopy = {...state}
         stateCopy.newPostText = action.newText      //присваимваем новое значение в state, которое получили от пользователя
         return stateCopy
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

export default profileReducer;