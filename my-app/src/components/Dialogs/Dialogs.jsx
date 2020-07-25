import React from "react";
import s from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";


const Dialogs = (props) => {

    let dialogs = props.state.dialogs.map((dialog) => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>));
    let message = props.state.messages.map((message) => (<Message key={message.id} text={message.message}/>));

    let addNewMessage = (values) => {
        props.addMessage(values.messageInput);
    };

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogs}
                </div>
                <div className={s.messages}>
                    {message}
                </div>
            </div>

            <DialogReduxForm onSubmit={addNewMessage} />
        </div>
    )
};

const maxLength100 = maxLengthCreator(100);

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[required, maxLength100]} placeholder="Enter your message" name={"messageInput"} />
            </div>
            <div>
                <button>Write Message</button>
            </div>
        </form>
    )
};


const DialogReduxForm = reduxForm({form: 'message'})(DialogForm);

export default Dialogs;