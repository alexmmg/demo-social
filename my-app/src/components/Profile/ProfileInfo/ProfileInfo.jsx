import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img
                    src='https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                     src={props.profile.photos.large}/>
                <span className={s.fullName}>{props.profile.fullName}</span>
            </div>
            <div>
                <span className={s.aboutMe}>{props.profile.aboutMe}</span>
            </div>
        </div>
    )
};

export default ProfileInfo;
