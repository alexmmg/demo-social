import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"


const MyPosts = (props) => {

    let post = props.posts.map( (el) => (<Post title = {el.title} src = {el.src} likesCount = {el.likesCount} />));

    let postText = React.createRef();

    let addPost = () => {
        debugger;
        let text = postText.current.value;
        props.addPost(text);
    };

    return (
            <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={postText}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
                <div className={s.posts}>
                    { post }
                </div>
            </div>
    )
};

export default MyPosts;
