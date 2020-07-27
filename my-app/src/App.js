import React, {Component, Suspense} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import connect from "react-redux/lib/connect/connect";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Provider} from "react-redux";
import store from "./redux/redux-store";


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));


class App extends Component {

    componentDidMount() {
        this.props.initializeApp();
    };

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer store={this.props.store}/>
                <Navbar store={this.props.store}/>
                <div className='app-wrapper-content'>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>
                    <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>
                    <Route path='/users' render={() =>
                        <Suspense fallback={"Loading..."}>
                            <UsersContainer store={this.props.store}/>
                        </Suspense>
                    }/>
                    <Route path='/login' render={() => <Login store={this.props.store}/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
});

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);

const SocialNetworkApp = (props) => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer />
        </Provider>
    </BrowserRouter>
};

export default SocialNetworkApp;
// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp}))(App);