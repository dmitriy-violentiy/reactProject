import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer"
import { compose } from "redux";
import { getStatus } from "../../redux/profile-reducer";
import { updateStatus } from "../../redux/profile-reducer";
import { savePhoto, saveProfile } from "../../redux/profile-reducer";
import withRouter from "../common/WithRouter/withRouter";

const ProfileContainer = (props) => { 
   
   let refreshProfile = () => {
      let userId = props.router.params.userId;
      //укажем, что если нет userId то выведем нас
		if (!userId) { 
         userId = props.autorizedUserId;
         if(!userId) {
            props.router.navigate('/login');     //если userId не оказалось, редиректим на login
         }
      }
      props.getUserProfile(userId)
      props.getStatus(userId)
   }

   useEffect( () => {
      refreshProfile()
   }, [props.router.params.userId])

      return (
         <Profile {...props} 
            isOwner={!props.router.params.userId}
            profile={props.profile} 
            status={props.status} 
            updateStatus={props.updateStatus}/>  //используем ... т.к. хотим передать сразу все пропсы дальше
         )
   }

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status,
   autorizedUserId: state.auth.userId,
   isAuth: state.auth.isAuth

})

export default compose(
   connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
   withRouter,

)(ProfileContainer)