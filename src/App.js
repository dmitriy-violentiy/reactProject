import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
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
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import withRouter from "./components/common/WithRouter/withRouter";

class App extends React.Component {
   componentDidMount() {
      this.props.initializeApp()
   }
   render() {
      if(!this.props.initialized) {
         return <Preloader />
      }
      return (
            <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
               <Routes>
                  <Route path="/dialogs/*" element={<DialogsContainer />} />
                  <Route path='/profile/:userId?' element={<ProfileContainer />} />
                  <Route path="/news" element={<News />} />
                  <Route path="/Music" element={<Music />} />
                  <Route path="/settings" element={<Settings />} />
                  <Route path="/friends/*" element={<FriendsContainer/>} />
                  <Route path="/users/*" element={<UsersContainer/>} />
                  <Route path="/login/*" element={<Login/>} />
               </Routes>
            </div>
            </div>
      );
   }
};

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})

export default compose(
   withRouter,
   connect(mapStateToProps, {initializeApp})
   )(App);

