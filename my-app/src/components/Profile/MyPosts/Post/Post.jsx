import React from "react";
import s from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src={props.src}/>
            {props.title}
            <div>
                Лайки: {props.likesCount}
            </div>
        </div>
    )
};

export default Post;
