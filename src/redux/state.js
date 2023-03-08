import { rerenderEntireTree } from "../render";

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

export let updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText      //присваимваем новое значение в state, которое получили от пользователя
   rerenderEntireTree(state);
 };

export default state;
