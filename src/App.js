import React, { lazy, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeaderContainer from "./components/Header/HeaderContainer";
import { connect } from "react-redux";
import { initializeApp } from "./redux/app-reducer";
import { compose } from "redux";
import withRouter from "./components/common/WithRouter/withRouter";
import RootNavigator from "./components/common/RootNavigator/RootNavigator";

lazy(() => import("./components/Dialogs/DialogsContainer"));
lazy(() => import("./components/Profile/ProfileContainer"));

const App = (props) => {
   useEffect(() => {
      props.initializeApp()
   }, [])

   return (
      <div className="app-wrapper">
         <HeaderContainer />
         <Navbar />
         <RootNavigator />
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

