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
    getState() {
      return(
         this._state
      )
    },
    _callSubscriber() {
      console.log("State changed")
   },
   addPost() {
      let newPost = {
        id: 5,
        messege: this._state.profilePage.newPostText,
        likesCount: 1,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber( this._state);
    },
    addMessage() {
      let newMessage = {
         id: 7,
         messege:  this._state.dialogsPage.newMessageText          //сюда заносится значение внесенное пользователем
      }
      this._state.dialogsPage.messages.push(newMessage)     //в конец массива пушим(добавляем) новый элемент
      this._state.dialogsPage.newMessageText = ''
      this._callSubscriber( this._state);
   },
   updateNewPostText(newText) {
      this._state.profilePage.newPostText = newText      //присваимваем новое значение в state, которое получили от пользователя
      this._callSubscriber( this._state);
    },
    updateNewMessageText(newText) {
      this._state.dialogsPage.newMessageText = newText      //присваимваем новое значение в state, которое получили от пользователя
      this._callSubscriber( this._state);
    },
   subscribe(observer) {
      this._callSubscriber = observer;               //наблюдатель (observer)
    }

}

export default store;

window.store = store
