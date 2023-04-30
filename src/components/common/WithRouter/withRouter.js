import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

//создадим свой withRouter т.к. в современных версиях он не поддерживается
export function withRouter(Component) {
	function ComponentWithRouterProp(props) {
		let location = useLocation();
		let navigate = useNavigate();
		let params = useParams();
		return <Component {...props} router={{ location, navigate, params }} />;
	}
	return ComponentWithRouterProp;
}

export default withRouter;