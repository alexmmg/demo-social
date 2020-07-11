import React from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.png'

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) =>{
        if(e.target.files.length){
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
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
