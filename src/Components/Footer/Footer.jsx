import React from "react";
import styles from "./Footer.module.css";
import { Link, BrowserRouter } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className={styles.box}>
        <div className={styles.leftBox}>
            <BrowserRouter forceRefresh={true}><Link to="/aboutUs" className={styles.item}>About us</Link></BrowserRouter>
        </div>
        <div className={styles.middleBox}>
            <BrowserRouter forceRefresh={true}><Link to="/termService" className={styles.item}>Terms of Service</Link></BrowserRouter>
            <p className={styles.itemCompany}>© Copyright 2020 Home recipe Corporation</p>
        </div>
        <div className={styles.rightBox}>
            <BrowserRouter forceRefresh={true}><Link to="/privacy" className={styles.item}>Privacy policy</Link></BrowserRouter>
        </div>
    </div>
  );
};

export default Footer;
