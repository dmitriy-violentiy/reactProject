import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Friends from "./components/Friends/Friends";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";


const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/dialogs/*" element={<Dialogs state={props.state.dialogsPage}/>} />
               <Route path="/profile" element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
               <Route path="/news" element={<News />} />
               <Route path="/Music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/friends/*" element={<Friends state={props.state.friendsPage}/>} />
            </Routes>
         </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
