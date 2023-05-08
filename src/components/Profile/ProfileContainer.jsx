import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer"
import { compose } from "redux";
import { getStatus } from "../../redux/profile-reducer";
import { updateStatus } from "../../redux/profile-reducer";
import { savePhoto, saveProfile } from "../../redux/profile-reducer";
import withRouter from "../common/WithRouter/withRouter";

class ProfileContainer extends React.Component {

   refreshProfile() {
      let userId = this.props.router.params.userId;
      //укажем, что если нет userId то выведем нас
		if (!userId) { 
         userId = this. props.autorizedUserId;
         if(!userId) {
            this.props.router.navigate('/login');     //если userId не оказалось, редиректим на login
         }
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
   }
   
   //срабатывает 1 раз, когда компонента вмонтируется
   componentDidMount() {
		this.refreshProfile()
	}

   componentDidUpdate(prevProps, prevState, snapshot) {
      if (this.props.router.params.userId != prevProps.router.params.userId) {   //если предыдущие пропсы не равны новым, перерисуем. Нужно, чтобы при нажатии на Profile, Переходили на нашу страничку
         this.refreshProfile()
      }
   }
   
   render() {
      return (
         <Profile {...this.props} 
            isOwner={!this.props.router.params.userId}
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus}/>  //используем ... т.к. хотим передать сразу все пропсы дальше
         )
   }
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
   /* withAuthRedirect */
)(ProfileContainer)