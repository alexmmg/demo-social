import dialogsReducer, {addMessageActionCreator} from "./dialogsReducer";

let state = {
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


it ("message should be added", () => {
    // 1. Initial data
    let action = addMessageActionCreator ("Some new message");

    // 2. Action
    let newState = dialogsReducer(state, action);

    // 3. Expectation
    expect(newState.messages.length).toBe(4);
});



it ("message text should be similar to what is added to addMessageActionCreator", () => {
    // 1. Initial data
    let action = addMessageActionCreator ("Some new message");

    // 2. Action
    let newState = dialogsReducer(state, action);

    // 3. Expectation
    expect(newState.messages[3].message).toBe("Some new message");
});