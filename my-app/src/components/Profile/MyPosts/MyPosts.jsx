import React from "react";
import s from "./MyPosts.module.css"

const MyPosts = () => {
    return (
            <div>
                My post
                <div>
                    New post
                </div>
                <div>
                    <div className={s.item}>
                        post1
                    </div>
                    <div className={s.item}>
                        post2
                    </div>
                </div>
            </div>
    )
};

export default MyPosts;
