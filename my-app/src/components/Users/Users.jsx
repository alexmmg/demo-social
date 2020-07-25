import React from "react";
import s from './User.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalItemsCount={totalUsersCount}
                       pageSize={pageSize}/>
            <div>
                {
                    users.map(u => <User key={u.id} user={u}
                                               followingInProgress={props.followingInProgress}
                                               followUser={props.followUser}
                                               unfollowUser={props.unfollowUser} />)
                }
            </div>
        </div>
    )
};

export default Users;