import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { addPost, updateNewPostText, addMessage, updateNewMessageText } from "./redux/state.js";


const root = ReactDOM.createRoot(document.getElementById("root"));
export let rerenderEntireTree = (state) => {
   
   root.render(
      <React.StrictMode>
         <App state={state} addPost={addPost} updateNewPostText={updateNewPostText} addMessage={addMessage} updateNewMessageText={updateNewMessageText}/>
      </React.StrictMode>
   );
}
