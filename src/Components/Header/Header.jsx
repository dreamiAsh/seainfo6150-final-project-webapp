import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.inputBox}>
                <input className={styles.input} placeholder=" Find your recipe"/>
                <Link to="/search" className={styles.Go}>GO</Link>
            </div>
            <p className={styles.title}>Home recipe</p>
            <Link to="/signin" className={styles.signIn}>Sign in</Link>
        </div>
    );
};

export default Header;
