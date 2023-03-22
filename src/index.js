import React from "react";
import store from "./redux/state";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/* import { addPost, updateNewPostText, addMessage, updateNewMessageText } from "./redux/state.js"; */


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
   
   root.render(
      <React.StrictMode>
         <App state={state} dispatch={store.dispatch.bind(store)}/>
      </React.StrictMode>
   );
}

rerenderEntireTree(store.getState())

store.subscribe(rerenderEntireTree)       //вызываем функцию которая находится в store и передаем в нее функцию rerender

/* 
<App posts={posts} dialogs={dialogs} messages={messages}/> */
