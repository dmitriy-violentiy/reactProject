import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "../../Users/UsersContainer";
import Login from "../../Login/login";
import Preloader from "../../common/Preloader/Preloader";
import ProfileContainer from "../../Profile/ProfileContainer";
import DialogsContainer from "../../Dialogs/DialogsContainer";

const RootNavigator = () => {
   return (

      <div className="app-wrapper-content">
         <Suspense fallback={<Preloader />}>
            <Routes>
               <Route path="/" element={<ProfileContainer />} />
               <Route path="/reactProject" element={<ProfileContainer />} />
               <Route path="/dialogs/*" element={<DialogsContainer />} />
               <Route path='/profile/:userId?' element={<ProfileContainer />} />
               <Route path="/users/" element={<UsersContainer />} />
               <Route path="/login/" element={<Login />} />
               <Route path="*" element={<div>404 NOT FOUND</div>} />
            </Routes>
         </Suspense>
      </div>

   );
};

export default RootNavigator

