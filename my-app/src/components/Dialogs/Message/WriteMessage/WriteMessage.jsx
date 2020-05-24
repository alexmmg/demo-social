import React from "react";
import s from "./WriteMessage.module.css";
// import DialogItem from "./DialogItem/DialogItem";
// import Message from "./Message/Message";


const WriteMessage = (props) => {
    // let dialogs = props.state.dialogs.map( (dialog) => ( <DialogItem name = {dialog.name} id = {dialog.id} />));
    // let message = props.state.messages.map( (message) => ( <Message text = {message.message} />));
let messageText = React.createRef();
    let write = () => {
        let text = messageText.current.value;
        alert(text);
    };

    return (
        <div>
            <div>
                <textarea ref={messageText}></textarea>
            </div>
            <div>
                <button onClick={write}>Write Message</button>
            </div>
        </div>
    )
};

export default WriteMessage;