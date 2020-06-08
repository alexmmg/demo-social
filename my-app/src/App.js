import React from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";


const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar store={props.store}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <ProfileContainer store={props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
