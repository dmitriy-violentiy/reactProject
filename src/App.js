import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import FriendsContainer from "./components/Friends/FriendsContainer";
import Music from "./components/Music/Music";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";


const App = (props) => {
   return (
      <BrowserRouter>
         <div className="app-wrapper">
         <HeaderContainer />
         <Navbar />
         <div className="app-wrapper-content">
            <Routes>
               <Route path="/dialogs/*" element={<DialogsContainer />} />
               <Route path='/profile/:userId?' element={<ProfileContainer />} />    /* знак ? означает, что если нет userId то выведем просто profile */
               {/* <Route path="/profile/*" element={<ProfileContainer />} /> */}
               <Route path="/news" element={<News />} />
               <Route path="/Music" element={<Music />} />
               <Route path="/settings" element={<Settings />} />
               <Route path="/friends/*" element={<FriendsContainer/>} />
               <Route path="/users/*" element={<UsersContainer/>} />
               <Route path="/login/*" element={<Login/>} />
            </Routes>
         </div>
         </div>
      </BrowserRouter>
   );
};

export default App;
