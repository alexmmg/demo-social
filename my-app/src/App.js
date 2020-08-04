import React, {Component, Suspense} from 'react';
import Navbar from './components/Navbar/Navbar'
import './App.css';
import {HashRouter, Route, withRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {Provider, connect} from "react-redux";
import store from "./redux/redux-store";
import Switch from "react-router-dom/es/Switch";
import Redirect from "react-router-dom/es/Redirect";


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

class App extends Component {
    catchAllUnhandledErrors = () => {
      alert("Some error occurred")
    };

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    };

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer store={this.props.store}/>
                <Navbar store={this.props.store}/>
                <div className='app-wrapper-content'>
                    <Switch>
                        <Route exact path='/' render={() => <Redirect to={"./profile"} />}/>

                        <Route path='/profile/:userId?' render={() => <ProfileContainer store={this.props.store}/>}/>

                        <Route path='/dialogs' render={() => <DialogsContainer store={this.props.store}/>}/>

                        <Route path='/users' render={() =>
                            <Suspense fallback={"Loading..."}>
                                <UsersContainer store={this.props.store}/>
                            </Suspense>
                        }/>

                        <Route path='/login' render={() => <Login store={this.props.store}/>}/>

                        <Route path='*' render={() => <div>404 NOT FOUND</div>}/>

                    </Switch>
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
    return <HashRouter>
        <Provider store={store}>
            <AppContainer store={store}/>
        </Provider>
    </HashRouter>
};

export default SocialNetworkApp;
// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp}))(App);