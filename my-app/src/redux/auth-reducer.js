import {authAPI, userAPI} from "../api/api";
import {setUserProfile} from "./profileReducer";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};

export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_USER_DATA, payload: {id, email, login, isAuth}});

export const getMyAccount = () => {
    return (dispatch) => {
        authAPI.getMyAccount().then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getMyAccount());
            }
        })
    }
};

export const logout = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.logout(email, password, rememberMe).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
};

export default authReducer;
