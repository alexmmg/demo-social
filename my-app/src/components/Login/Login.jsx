import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import connect from "react-redux/lib/connect/connect";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import s from "./../common/FormsControls/FormsControl.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"email"} name={"email"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}
                       type={"password"}/>
            </div>
            <div>
                <Field type="checkbox" name={"rememberMe"} component={Input} />
            </div>

            {captchaUrl && <img alt="captcha" src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={s.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);


const Login = (props) => {

    const sendAuthData = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={sendAuthData} captchaUrl={props.captchaUrl}/>
    </div>
};


const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);