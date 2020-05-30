import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
debugger

    let state = props.store.getState().dialogPage;

    let onAddMessageClick = () => {
        props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <Dialogs addMessage={onAddMessageClick} updateNewMessageText={onMessageChange}
                 state={state} newMessageText={state.newMessageText}/>
    )
};

export default DialogsContainer;