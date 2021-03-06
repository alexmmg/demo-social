import React from "react";
import {Redirect} from "react-router-dom";
import {getProfile, setUserProfile} from "../redux/profileReducer";
import connect from "react-redux/lib/connect/connect";

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={'/login'}/>;
            return <Component {...this.props} />
        }
    }

    let connectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return connectedAuthRedirectComponent;
};