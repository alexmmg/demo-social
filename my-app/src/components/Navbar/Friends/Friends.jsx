import React from "react";
import FriendItem from "./Friend/FriendItem";


const Friends = (props) => {
    let friend = props.friends.map((el) => (<FriendItem src={el.src} name={el.name}/>));

    return (
        <div>
            <h3>Friends</h3>
            <div>
                {friend}
            </div>
        </div>
    )
};

export default Friends;
