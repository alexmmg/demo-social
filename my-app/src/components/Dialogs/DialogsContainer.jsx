import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import Redirect from "react-router-dom/es/Redirect";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (props) => {
//     debugger
//
//     let state = props.store.getState().dialogPage;
//
//     let onAddMessageClick = () => {
//         props.store.dispatch(addMessageActionCreator());
//     };
//
//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text));
//     };
//
//     return (
//         <Dialogs addMessage={onAddMessageClick} updateNewMessageText={onMessageChange}
//                  state={state} newMessageText={state.newMessageText}/>
//     )
// };


let mapStateToProps = (state) => {
    return {
        state: state.dialogPage,
        newMessageText: state.dialogPage.newMessageText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        addMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
};

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
) (Dialogs);

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;
