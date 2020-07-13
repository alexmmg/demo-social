import React from "react";
import s from "./ProfileInfo.module.css";
import {createField, Input} from "../../common/FormsControls/FormsControls";
import reduxForm from "redux-form/lib/immutable/reduxForm";

const ProfileDataForm = ({profile}) => {
    return <form>
        <div>
            <button onClick={() => {
            }}>save
            </button>
        </div>
        <div className={s.fullName}>
            <span><b>Full name:</b></span> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <div>
                <b>Looking for a job:</b>
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            {profile.lookingForAJob &&
            <div>
                <b>My professional skills:</b> {createField("Professional skills", "lookingForAJobf", [], Input)}
            </div>
            }
            <div>
                <b>About me:</b> {profile.lookingForAJob}
            </div>
            {/*<div>*/}
            {/*    <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {*/}
            {/*    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>*/}
            {/*})}*/}
            {/*</div>*/}

        </div>

        <div>
            <span className={s.aboutMe}>{profile.aboutMe}</span>
        </div>
    </form>
};

const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;