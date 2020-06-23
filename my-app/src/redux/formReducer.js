import {userAPI} from "../api/api";
import authReducer from "./auth-reducer";

const SEND_LOGIN = 'SEND_LOGIN';

let initialState = {
    email: '',
    password: '',
    rememberMe: false
};

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_LOGIN: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
};

export let setAuthUserData = (id, email, login) => ({type: SET_USER_DATA, data: {id, email, login}});

export const getMyAccount = () => {
    return (dispatch) => {
        userAPI.getMyAccount().then((response) => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
};

export default formReducer;