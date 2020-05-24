import React from "react";
import s from "./ProfileInfo.module.css"

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://image.shutterstock.com/image-photo/chairs-umbrella-palm-beach-tropical-260nw-559599520.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.avatar}
                     src='https://www.animalfriends.co.uk/app/uploads/2018/10/31102444/why-isnt-anyone-adopting-black-cats.jpg'/>
                Description
            </div>
        </div>
    )
};

export default ProfileInfo;
