import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Header from "./components/Header/Header";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Profile from "./components/Profile/Profile";
import Settings from "./components/Settings/Settings";
/* import { addMessage } from "./redux/state"; */


const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
         <Header />
         <Navbar />
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
               <Route path="/profile/*" element={<Profile store={props.store} />} />
               <Route path="/news" element={<News />} />
               <Route path="/Music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/friends/*" element={<FriendsContainer state={props.store}/>} />
            </Routes>
         </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
