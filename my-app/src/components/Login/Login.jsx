import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={Input} validate={[required]}/>
            </div>
            <div>
                <Field type="checkbox" name={"checkbox"} component={Input} placeholder={"Remember me"}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const sendAuthData = (formData) => {
    console.log(formData);
};

const Login = (props) => {
    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={sendAuthData} />
    </div>
};


export default Login;