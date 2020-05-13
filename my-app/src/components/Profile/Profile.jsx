import React from "react";
import s from "./Profile.module.css"
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg'/>
            </div>
            <div>
                <img className={s.avatar}
                     src='https://www.animalfriends.co.uk/app/uploads/2018/10/31102444/why-isnt-anyone-adopting-black-cats.jpg'/>
                Description
            </div>
            <MyPosts/>
        </div>
    )
};

export default Profile;
