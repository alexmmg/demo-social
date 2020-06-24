import {profileAPI, userAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {
            title: "His new car",
            src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png",
            likesCount: '23'
        },
        {
            title: "I've bought a house",
            src: "https://s3.tproger.ru/uploads/2020/05/unnamed-50x50.jpg",
            likesCount: '12'
        },
        {
            title: "Green socks",
            src: "https://s3.tproger.ru/uploads/2020/04/1_tilda1502215-50x50.jpg",
            likesCount: '2'
        },
        {
            title: "It's my life",
            src: "https://s3.tproger.ru/uploads/2020/04/MyOffice_Logo_tilda1424002-50x50.png",
            likesCount: '33'
        },
    ],
    newPostText: "",
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                title: action.newPostText,
                src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png",
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }
};

export let addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText});

export let setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});

export let setStatus = (status) => ({type: SET_STATUS, status});

export const getProfile = (userId) => {
    return (dispatch) => {
        userAPI.getProfile(userId).then((response) => {
            dispatch(setUserProfile(response.data));
        })
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then((response) => {
            dispatch(setStatus(response.data));
        })
    }
};

export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
};


export default profileReducer;
