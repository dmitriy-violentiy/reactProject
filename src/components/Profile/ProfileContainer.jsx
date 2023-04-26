import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer"
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { getStatus } from "../../redux/profile-reducer";
import { updateStatus } from "../../redux/profile-reducer";

class ProfileContainer extends React.Component {

   componentDidMount() {
		let userId = this.props.router.params.userId;
      //укажем, что если нет userId то выведем 2-го пользователя
		if (!userId) { 
         userId = 28810;
      }
      this.props.getUserProfile(userId)
      this.props.getStatus(userId)
	}

   /* componentDidUpdate(prevProps) {
		let userId = this.props.router.params.userId;
		if (prevProps.router.params.userId !== userId) {
			let userId = 2;
			axios
         .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
				.then((res) => {
					this.props.setUserProfile(res.data);
				});
		}
	} */
   
   render() {
      return (
         <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>  //используем ... т.к. хотим передать сразу все пропсы дальше
         )
   }
}

let mapStateToProps = (state) => ({
   profile: state.profilePage.profile,
   status: state.profilePage.status
})

//создадим свой withRouter т.к. в современных версиях он не поддерживается
function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}

export default compose(
   connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
   withRouter,
   /* withAuthRedirect */
)(ProfileContainer)