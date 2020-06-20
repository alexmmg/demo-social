import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import connect from "react-redux/lib/connect/connect";
import {setUserProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {userAPI} from "../../api/api";
import {getProfile} from "../../redux/profileReducer";
import Redirect from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId); // санка
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} getProfile={this.props.getProfile}
                     isAuth={this.props.isAuth}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

export default compose (
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile, getProfile})
    ) (ProfileContainer);


//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);
