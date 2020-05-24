import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import WriteMessage from "./Message/WriteMessage/WriteMessage"


const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map( (dialog) => ( <DialogItem name = {dialog.name} id = {dialog.id} />));
    let message = props.state.messages.map( (message) => ( <Message text = {message.message} />));

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
            <WriteMessage />
        </div>
    )
};

export default Dialogs;