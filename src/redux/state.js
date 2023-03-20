let rerenderEntireTree = () => {
   console.log("State changed")
}

let state = {
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
};


window.state = state

export let addPost = () => {
  let newPost = {
    id: 5,
    messege: state.profilePage.newPostText,
    likesCount: 1,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
};

export const addMessage = () => {
   let newMessage = {
      id: 7,
      messege: state.dialogsPage.newMessageText          //сюда заносится значение внесенное пользователем
   }
   state.dialogsPage.messages.push(newMessage)     //в конец массива пушим(добавляем) новый элемент
   state.dialogsPage.newMessageText = ''
   rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText      //присваимваем новое значение в state, которое получили от пользователя
   rerenderEntireTree(state);
 };

export const updateNewMessageText = (newText) => {
   state.dialogsPage.newMessageText = newText      //присваимваем новое значение в state, которое получили от пользователя
   rerenderEntireTree(state);
 };

 export const subscribe = (observer) => {
   rerenderEntireTree = observer;               //наблюдатель (observer)
 }


export default state;
