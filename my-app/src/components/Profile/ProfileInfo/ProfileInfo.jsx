import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.png'
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            </div>

            {editMode
                ? <ProfileDataForm profile={profile}/>
                : <ProfileData profile={profile} isOwner={isOwner} goToEditMode={() => {
                    setEditMode(true)
                }}/>}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </div>
    )
};


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>edit</button>
        </div>}
        <div className={s.fullName}>
            <span><b>Full name:</b>{profile.fullName}</span>
        </div>
        <div>
            <div>
                <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b>About me:</b> {profile.lookingForAJob}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>

        </div>

        <div>
            <span className={s.aboutMe}>{profile.aboutMe}</span>
        </div>
    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
};

export default ProfileInfo;
