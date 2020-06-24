import React from "react";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} name={"login"} component={"input"}/>
            </div>
            <div>
                <Field placeholder={"Password"} name={"password"} component={"input"}/>
            </div>
            <div>
                <Field type="checkbox" name={"checkbox"} component={"input"}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const sendAuthData = (formData) => {
    console.log(formData.);
};

const Login = (props) => {
    return <div>
        <h1> Login </h1>
        <LoginReduxForm onSubmit={sendAuthData} />
    </div>
};


export default Login;