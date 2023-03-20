import React from "react";
import reportWebVitals from "./reportWebVitals";
import state, { subscribe } from "./redux/state";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { addPost, updateNewPostText, addMessage, updateNewMessageText } from "./redux/state.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
   
   root.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
      </React.StrictMode>
   );
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)       //вызываем функцию которая находится в state и передаем в нее функцию rerender

reportWebVitals();

/* 
<App posts={posts} dialogs={dialogs} messages={messages}/> */
