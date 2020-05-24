import React from "react";
import s from "./Navbar.module.css";
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";


const Navbar = (props) => {
    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to="/profile" activeClassName={s.activeLink} className={s.item}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.activeLink} className={s.item}>Messages</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.activeLink} className={s.item}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.activeLink} className={s.item}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.activeLink} className={s.item}>Settings</NavLink>
                </div>
                <Friends friends = {props.state.friends} />
            </nav>
        </div>
    )
};

export default Navbar;