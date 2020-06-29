import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt="Company Logo" src='https://upload.wikimedia.org/wikipedia/commons/2/29/HP_New_Logo_2D.svg'/>
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div>{props.login}<button onClick={props.logout}>Log out</button></div>
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
};

export default Header;