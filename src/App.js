import React, { Suspense, lazy } from "react";
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

class App extends React.Component {
   catchAllUnhandleErrors = (reason, promise) => {
      alert("Some error")
   } 
   componentDidMount() {
      this.props.initializeApp()
      /* window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors)   */   //обработка всех ошибок
   }
   /* componentWillUnmount() {
      window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors)
   } */

   render() {
      /* if(!this.props.initialized) {
         return <Preloader />
      } */
      return (
            <div className="app-wrapper">
            <HeaderContainer />
            <Navbar />
            <div className="app-wrapper-content">
               <Suspense fallback={<Preloader />}>
                  <Routes>
                     <Route path="/" element={<ProfileContainer />} />
                     <Route path="/reactProject" element={<ProfileContainer />} />
                     <Route path="/dialogs/" element={<DialogsContainer />} />
                     <Route path='/profile/:userId?' element={<ProfileContainer />} />
                     <Route path="/users/" element={<UsersContainer/>} />
                     <Route path="/login/" element={<Login/>} />
                     <Route path="*" element={<div>404 NOT FOUND</div>} />
                  </Routes>
               </Suspense>
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

