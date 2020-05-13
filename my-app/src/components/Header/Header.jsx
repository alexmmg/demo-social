import React from "react";
import s from "./Header.module.css"

const Header = () => {
    return (
        <header className={s.header}>
            <img alt="Company Logo" src='https://upload.wikimedia.org/wikipedia/commons/2/29/HP_New_Logo_2D.svg'/>
        </header>
    )
};

export default Header;