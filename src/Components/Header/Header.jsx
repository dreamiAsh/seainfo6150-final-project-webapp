import React from "react";
import styles from "./Header.module.css";
import { Link, BrowserRouter } from "react-router-dom";

const Header = (props) => {
    return (
        <div className={styles.box}>
            <div className={styles.inputBox}>
                <input className={styles.input} placeholder=" Find your recipe"/>
                <BrowserRouter forceRefresh={true}><Link to="/search" className={styles.Go}>GO</Link></BrowserRouter>
            </div>
            <p className={styles.title}>Home recipe</p>
            <BrowserRouter forceRefresh={true}><Link to="/Signin" className={styles.signIn}>Sign in</Link></BrowserRouter>
        </div>
    );
};

export default Header;
