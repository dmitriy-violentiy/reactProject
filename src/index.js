import React from "react";
import store from "./redux/redux-store";

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StoreContext, { Provider } from "./StoreContext";

/* import { addPost, updateNewPostText, addMessage, updateNewMessageText } from "./redux/state.js"; */


const root = ReactDOM.createRoot(document.getElementById("root"));
let rerenderEntireTree = (state) => {
   
   root.render(
      <React.StrictMode>
         <Provider store={store}>
            <App />
         </Provider>
      </React.StrictMode>
   );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
   let state = store.getState()
   rerenderEntireTree(state)
})       //вызываем функцию которая находится в store и передаем в нее функцию rerender

/* 
<App posts={posts} dialogs={dialogs} messages={messages}/> */
