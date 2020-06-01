const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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
    newPostText: ""
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                title: state.newPostText,
                src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png",
                likesCount: '0'
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state;
    }
};

export let addPostActionCreator = () => ({type: ADD_POST});

export let updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
