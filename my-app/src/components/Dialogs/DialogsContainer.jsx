import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import WriteMessage from "./Message/WriteMessage/WriteMessage"
import MyPosts from "../Profile/MyPosts/MyPosts";


const Dialogs = (props) => {
debugger
    let dialogs = props.state.dialogs.map( (dialog) => ( <DialogItem name = {dialog.name} id = {dialog.id} />));
    let message = props.state.messages.map( (message) => ( <Message text = {message.message} />));

    return (
        <Dialogs />
    )
};

export default Dialogs;