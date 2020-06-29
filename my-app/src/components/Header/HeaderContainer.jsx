import React from "react";
import {setAuthUserData, logout} from "../../redux/auth-reducer";
import Header from "./Header";
import connect from "react-redux/lib/connect/connect";



class HeaderContainer extends React.Component {
    // componentDidMount() {
    //     this.props.getMyAccount();
    // };


    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

export default connect(mapStateToProps, {setAuthUserData, logout})(HeaderContainer);
