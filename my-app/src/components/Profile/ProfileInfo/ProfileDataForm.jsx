import React from "react";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import s from "./ProfileInfo.module.css"


const ProfileDataForm = ({handleSubmit, profile, error}) => {

    // console.log(initialValues);

    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        {error && <div className={s.formSummaryError}>
            {error}
        </div>}
        <div>
            <span><b>Full name:</b></span> {createField("Full name", "fullName", [], Input)}
        </div>
        <div>
            <div>
                <b>Looking for a job:</b>
                {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
            </div>
            <div>
                <b>My professional skills:</b>
                {createField("My professional skills", "lookingForAJobDescription", [], Textarea)}
            </div>
            <div>
                <b>About me:</b>
                {createField("About me", "aboutMe", [], Textarea)}
            </div>
            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                return <div className={s.contact}>
                    <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
                </div>
            })}
            </div>
        </div>

    </form>
};


const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);


export default ProfileDataFormReduxForm;