import React from "react";
import s from './User.module.css'
import userPhoto from './../../assets/images/user.png'
import {NavLink} from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, ...props}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} totalUsersCount={totalUsersCount} pageSize={pageSize} />
            {/*<div>*/}
            {/*    {pages.map(p => {*/}
            {/*        return <span className={props.currentPage === p && s.selectedPage}*/}
            {/*                     onClick={(e) => {*/}
            {/*                         props.onPageChanged(p)*/}
            {/*                     }}>{p}</span>*/}
            {/*    })}*/}
            {/*</div>*/}
            {props.users.map(u => <div key={u.id}>
                    <span>
                       <div>
                       <NavLink to={"/profile" + "/" + u.id}>
                           <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.photo}/>
                       </NavLink>
                       </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollowUser(u.id);

                                    // props.toggleFollowingProgress(true, u.id);
                                    // userAPI.unfollowUser(u.id).then((response) => {
                                    //     if (response.data.resultCode === 0) {
                                    //         props.unfollow(u.id)
                                    //     }
                                    //     props.toggleFollowingProgress(false, u.id);
                                    // });
                                }}>Follow</button>

                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.followUser(u.id);

                                    // props.toggleFollowingProgress(true, u.id);
                                    // userAPI.followUser(u.id).then((response) => {
                                    //     if (response.data.resultCode === 0) {
                                    //         props.follow(u.id)
                                    //     }
                                    //     props.toggleFollowingProgress(false, u.id);
                                    // });


                                }}>Unfollow</button>}
                         </div>
                    </span>
                <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </span>
                    </span>
            </div>)
            }
        </div>
    )
};

export default Users;