const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_MESSAGE: {
                let newMessage = {
                    id: '5',
                    message: action.messageInput
                };
                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
            }
            default:
                return state;
        }
    }
;

export let addMessageActionCreator = (messageInput) => ({type: ADD_MESSAGE, messageInput});

export default dialogsReducer;