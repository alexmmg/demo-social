import React from 'react';
import './index.css';
import store from "./redux/redux-store";
import ReactDOM from 'react-dom/';
import './index.css';
import SocialNetworkApp from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(<SocialNetworkApp/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
