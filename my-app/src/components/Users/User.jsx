import React from "react";
import s from './User.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";

let User = ({user, followingInProgress, unfollowUser, followUser}) => {
    return (
        <div>
            <span>
                <div>
                <NavLink to={"/profile" + "/" + user.id}>
                   <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.photo}/>
                </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollowUser(user.id)
                        }}>Follow</button>

                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            followUser(user.id);
                        }}>Unfollow</button>}
                 </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
};

export default User;