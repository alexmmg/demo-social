import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import reduxForm from "redux-form/lib/immutable/reduxForm";
import Field from "redux-form/lib/Field";


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

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="input" type="text" name={"newPostText"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
};

const PostReduxForm = reduxForm({form: 'post'})(PostForm);

export default MyPosts;
