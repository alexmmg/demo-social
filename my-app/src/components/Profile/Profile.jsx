import React from "react";
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Redirect from "react-router-dom";


const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo isOwner={props.isOwner} profile={props.profile} getProfile={props.getProfile} status={props.status}
                         updateStatus={props.updateStatus} savePhoto={props.savePhoto}/>
            <MyPostsContainer store={props.store} />
        </div>
    )
};


export default Profile;

