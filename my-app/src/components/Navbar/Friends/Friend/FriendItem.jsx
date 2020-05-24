import React from "react";
import s from "./FriendItem.module.css"
// import Post from "./Post/Post"
// import postsData from "./../Profile"


const FriendItem = (props) => {
    return (
        <div>
            <img src={props.src}/>
            <div>
               {props.name}
            </div>
        </div>
    )
};

export default FriendItem;
