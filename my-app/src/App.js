import React, {Component} from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import './App.css';
import Profile from "./components/Profile";

class App extends Component {
    render() {
        return (
            <div className='app-wrapper'>
                <Header />
                <Navbar />
                <Profile/>
            </div>
        );
    }
}


export default App;
