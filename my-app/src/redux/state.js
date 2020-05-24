import {rerenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {title: "His new car", src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png", likesCount: '23'},
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
        ]
    },
    sidebar: {
        friends: [
            {name: "Vasja", src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png"},
            {name: "Petia", src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png"},
            {name: "Kolia", src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png"},
        ],
    }
};

export let addPost = (postMessage) => {
    let newPost = {
        title: postMessage,
        src: "https://s3.tproger.ru/uploads/2020/05/IMG_8715-50x50.png",
        likesCount: '0'
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;