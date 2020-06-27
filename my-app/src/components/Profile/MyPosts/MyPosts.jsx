import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";


const MyPosts = (props) => {

    let post = props.posts.map((el) => (<Post title={el.title} src={el.src} likesCount={el.likesCount}/>));

    // let newPostElement = React.createRef();
    //
    // let onAddPost = () => {
    //     props.addPost();
    // };

    let addPost = (value) => {
        props.addPost(value.newPostText);
    };


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <PostReduxForm onSubmit={addPost} />
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
};

let maxLength30 = maxLengthCreator(30);

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} type="text" placeholder={"Post message"} name={"newPostText"} validate={[required, maxLength30 ]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

export default MyPosts;
