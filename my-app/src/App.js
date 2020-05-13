import React, {Component} from 'react';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import './App.css';
// import MyPosts from "./components/Profile/MyPosts/MyPosts";
import Profile from "./components/Profile/Profile";

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Profile />
            </div>
        );
    }
}


export default App;
