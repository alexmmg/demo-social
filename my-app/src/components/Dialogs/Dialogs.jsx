import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {
    debugger

    let dialogs = props.state.dialogs.map( (dialog) => ( <DialogItem name = {dialog.name} id = {dialog.id} />));
    let message = props.state.messages.map( (message) => ( <Message text = {message.message} />));

    let messageText = React.createRef();

    let addMessage = () => {
        props.addMessage();
    };

    let onMessageChange = () => {
        let text = messageText.current.value;
        props.updateNewMessageText(text);
    };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    { dialogs }
                </div>
                <div className={s.messages}>
                    { message }
                </div>
            </div>
            <div>
                <div>
                    <textarea ref={messageText} value={props.newMessageText} onChange={onMessageChange}></textarea>
                </div>
                <div>
                    <button onClick={addMessage}>Write Message</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;