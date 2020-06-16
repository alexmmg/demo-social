import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import connect from "react-redux/lib/connect/connect";
import {setUserProfile} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {userAPI} from "../../api/api";
import {getProfile} from "../../redux/profileReducer";


class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId); // санка
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} getProfile={this.props.getProfile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);
