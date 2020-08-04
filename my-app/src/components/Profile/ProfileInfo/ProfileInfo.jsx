import React, {useState} from "react";
import s from "./ProfileInfo.module.css"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from './../../../assets/images/user.png'
import ProfileDataFormReduxForm from "./ProfileDataForm";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
            console.log(formData);
        });
    };

    // const initialValues = {aboutMe:"Sasha111",
    //     contacts:{facebook:null, website:null,vk: "www.vk.com",twitter:null,instagram:null,youtube:null,github:null,mainLink:null},
    //     lookingForAJob:false,
    //     lookingForAJobDescription:"poiuy",
    //     fullName:"m,nbv",
    //     userId:8704,
    //     photos:{small: null,
    //         large: null}};

    return (
        <div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar} src={profile.photos.large || userPhoto}/>
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}

            </div>

            {editMode
                // initialValues={profile}
                ? <ProfileDataFormReduxForm profile={profile} initialvalues={profile} onSubmit={onSubmit} />
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
            <span><b>Full name: </b>{profile.fullName}</span>
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
                <b>About me:</b> {profile.aboutMe}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
            })}
            </div>

        </div>

    </div>
};

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}:</b> {contactValue}</div>
};

export default ProfileInfo;
