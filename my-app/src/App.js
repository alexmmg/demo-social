import React, {Component} from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


const App = (props) => {
    debugger;
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state = { props.state.sidebar } />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render = { () => <Profile store={props.store} />}/>
                    <Route path='/dialogs' render = { () => <DialogsContainer store={props.store} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
