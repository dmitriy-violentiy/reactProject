import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/login";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import withRouter from "./components/common/WithRouter/withRouter";

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"));

const App = (props) => {
   useEffect(() => {
      props.initializeApp()
   }, [])

   return (
      <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
         <Suspense fallback={<Preloader />}>
            <Routes>
               <Route path="/" element={<ProfileContainer />} />
               <Route path="/reactProject" element={<ProfileContainer />} />
               <Route path="/dialogs/*" element={<DialogsContainer />} />
               <Route path='/profile/:userId?' element={<ProfileContainer />} />
               <Route path="/users/" element={<UsersContainer/>} />
               <Route path="/login/" element={<Login/>} />
               <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
         </Suspense>
      </div>
      </div>
   );
};

const mapStateToProps = (state) => ({
   initialized: state.app.initialized
})

export default compose(
   withRouter,
   connect(mapStateToProps, {initializeApp})
   )(App);

