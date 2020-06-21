import React from "react";
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import {getStatus, setUserProfile, updateStatus} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {getProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId); // санка
        this.props.getStatus(userId); // санка
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} getProfile={this.props.getProfile}
                     isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose (
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus})
    ) (ProfileContainer);


//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);
