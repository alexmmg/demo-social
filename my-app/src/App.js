import React, {Component} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import connect from "react-redux/lib/connect/connect";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer store={this.props.store}/>
                    <Navbar store={this.props.store}/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                        <Route path='/users' render={() => <UsersContainer store={this.props.store}/>}/>
                        <Route path='/login' render={() => <Login store={this.props.store}/>}/>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}


const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);