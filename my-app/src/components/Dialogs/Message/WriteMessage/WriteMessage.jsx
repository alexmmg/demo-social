import React from "react";
import s from "./WriteMessage.module.css";
import {
    addMessageActionCreator,
    addPostActionCreator,
    updateNewMessageTextActionCreator,
    updateNewPostTextActionCreator
} from "../../../../redux/state";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";


const WriteMessage = (props) => {
    // let dialogs = props.state.dialogs.map( (dialog) => ( <DialogItem name = {dialog.name} id = {dialog.id} />));
    // let message = props.state.messages.map( (message) => ( <Message text = {message.message} />));
    let messageText = React.createRef();

    // let writeNewMessage = () => {
    //     let text = messageText.current.value;
    //     alert(text);
    // };

    let addMessage = () => {
        props.dispatch(addMessageActionCreator());
    };

    let onMessageChange = () => {
        debugger
        let text = messageText.current.value;
        props.dispatch(updateNewMessageTextActionCreator(text));
    };

    return (
        <div>
            <div>
                <textarea ref={messageText} value={props.newMessageText} onChange={onMessageChange}></textarea>
            </div>
            <div>
                <button onClick={addMessage}>Write Message</button>
            </div>
        </div>
    )
};

export default WriteMessage;