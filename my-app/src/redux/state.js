import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

// const ADD_POST = 'ADD-POST';
//
// const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

// const ADD_MESSAGE = 'ADD-MESSAGE';
//
// const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


let store = {
    _state: {
        profilePage: {
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
        },
        dialogPage: {
            dialogs: [
                {name: 'Mariya', id: '1'},
                {name: 'Sanya', id: '2'},
                {name: 'Petya', id: '3'},
                {name: 'John', id: '4'}
            ],
            messages: [
                {id: '1', message: 'Hello'},
                {id: '2', message: 'How are you?'},
                {id: '3', message: 'My friend is...'}
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {name: "Vasja", src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png"},
                {name: "Petia", src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png"},
                {name: "Kolia", src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png"},
            ],
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
        // if (action.type === ADD_POST) {
        //     let newPost = {
        //         title: this._state.profilePage.newPostText,
        //         src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png",
        //         likesCount: '0'
        //     };
        //     this._state.profilePage.posts.push(newPost);
        //     this._state.profilePage.newPostText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_POST_TEXT) {
        //     this._state.profilePage.newPostText = action.newText;

        // }

        // if (action.type === ADD_MESSAGE) {
        //     let newMessage = {
        //         id: '5',
        //         message: this._state.dialogPage.newMessageText
        //     };
        //     this._state.dialogPage.messages.push(newMessage);
        //     this._state.dialogPage.newMessageText = '';
        //     this._callSubscriber(this._state);
        // } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        //     this._state.dialogPage.newMessageText = action.newText;
        //     this._callSubscriber(this._state);
        // }
    }
};


export default store;

window.state = store;
