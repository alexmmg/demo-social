import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import connect from "react-redux/lib/connect/connect";
import {login} from "../../redux/auth-reducer";
import Redirect from "react-router-dom/es/Redirect";
import s from "./../common/FormsControls/FormsControl.module.css"

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
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
            {props.error && <div className={s.formSummaryError}>
                {props.error}
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
        props.login(formData.email, formData.password, formData.rememberMe);
    };

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={sendAuthData}/>
    </div>
};


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login})(Login);