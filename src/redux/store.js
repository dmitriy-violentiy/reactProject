import dialogsReducer from "./dialogs-reducer"
import friendsReducer from "./friends-reducer"
import profileReducer from "./profile-reducer"

let store = {
   _state: {
      profilePage: {
         posts: [
            { id: 1, messege: "Hi! How are you?", likesCount: 45 },
            { id: 2, messege: "I'm okey!", likesCount: 77 },
         ],
         newPostText: 'add new text'
      },
      dialogsPage: {
         dialogs: [
            { id: 1, name: "Dmitriy" },
            { id: 2, name: "Oleg" },
            { id: 3, name: "Inna" },
            { id: 4, name: "Egor" },
            { id: 5, name: "Anna" },
            { id: 6, name: "Evgen" },
         ],
         messages: [
            { id: 1, messege: "Hi" },
            { id: 2, messege: "How are you?" },
            { id: 3, messege: "Yo" },
            { id: 4, messege: "Hello" },
            { id: 5, messege: "By" },
            { id: 6, messege: "Maybe..." },
         ],
         newMessageText: 'add new message'
      },
      friendsPage: {
         friends: [
            { id: 1, name: "Dmitriy" },
            { id: 2, name: "Oleg" },
            { id: 3, name: "Inna" },
            { id: 4, name: "Egor" },
            { id: 5, name: "Anna" },
            { id: 6, name: "Kerol" },
            { id: 6, name: "Kirill" },
         ],
      },
   },
   _callSubscriber() {              //слушатель. Ему сообщают, когда изменяется что-либо
      console.log("State changed")
   },

   getState() {
      return(
         this._state
      )
   },
   subscribe(observer) {
      this._callSubscriber = observer;               //наблюдатель (observer)
   },

   dispatch(action) {      //action - это объект, который показывает, что мы хотим сделать
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
      this._state.friendsPage = friendsReducer(this._state.friendsPage, action)
      
      this._callSubscriber(this._state);        
   }
}

export default store;
