import React, {Component} from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css';
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state = { props.state.sidebar } />
                <div className='app-wrapper-content'>
                    <Route path='/profile' render = { () => <Profile state = { props.state.profilePage } updateNewPostText={props.updateNewPostText} addPost={props.addPost}/>}/>
                    <Route path='/dialogs' render = { () => <Dialogs state = { props.state.dialogPage } />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
