import React from "react";
import s from "./FormsControl.module.css"
import {required} from "../../../utils/validators/validators";
import Field from "redux-form/lib/Field";

export const Textarea = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
};

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (hasError ? s.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>

    )
};

export const createField = (placeholder, name, validators, component, props = {}, text = "") => {
    return <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/>
        {text}
    </div>
};