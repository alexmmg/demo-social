import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";


const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                     src={profile.photos.large}/>
                <span className={s.fullName}>{profile.fullName}</span>
            </div>
            <div>
                <span className={s.aboutMe}>{profile.aboutMe}</span>
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        </div>
    )
};

export default ProfileInfo;
