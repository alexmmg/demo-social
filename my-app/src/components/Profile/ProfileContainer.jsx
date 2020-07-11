import React from "react";
import Profile from "./Profile";
import connect from "react-redux/lib/connect/connect";
import {getStatus, savePhoto, setUserProfile, updateStatus} from "../../redux/profileReducer";
import withRouter from "react-router-dom/es/withRouter";
import {getProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    refreshProfile() {
        debugger
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("./login");
            }
        }
        this.props.getProfile(userId); // санка
        this.props.getStatus(userId); // санка
    }

    componentDidMount() {
        debugger
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        debugger
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }

        // this.refreshProfile();
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} getProfile={this.props.getProfile}
                     isAuth={this.props.isAuth} status={this.props.status} updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId} savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
});

export default compose(
    withRouter,
    withAuthRedirect,
    connect(mapStateToProps, {setUserProfile, getProfile, getStatus, updateStatus, savePhoto})
)(ProfileContainer);


//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
//
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect(mapStateToProps, {setUserProfile, getProfile})(WithUrlDataContainerComponent);
