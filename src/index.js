import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
   {id: 1, messege: "Hi! How are you?", likesCount: 45},
   {id: 2, messege: "I'm okey!", likesCount: 77},
]

let dialogs = [
   {id: 1, name: "Dmitriy"},
   {id: 2, name: "Oleg"},
   {id: 3, name: "Inna"},
   {id: 4, name: "Egor"},
   {id: 5, name: "Anna"},
   {id: 6, name: "Evgen"}
]

let messages = [
   {id: 1, messege: "Hi"},
   {id: 2, messege: "How are you?"},
   {id: 3, messege: "Yo"},
   {id: 4, messege: "Hello"},
   {id: 5, messege: "By"},
   {id: 6, messege: "Maybe..."}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <App posts={posts} dialogs={dialogs} messages={messages} />
   </React.StrictMode>
);


reportWebVitals();
































/* 
<App posts={posts} dialogs={dialogs} messages={messages}/> */