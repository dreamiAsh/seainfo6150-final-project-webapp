import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className={styles.box}>
        <div className={styles.leftBox}>
            <Link to="/aboutUs" className={styles.item}>About us</Link>
        </div>
        <div className={styles.middleBox}>
            <Link to="/termService" className={styles.item}>Terms of Service</Link>
            <p className={styles.itemCompany}>© Copyright 2020 Home recipe Corporation</p>
        </div>
        <div className={styles.rightBox}>
            <Link to="/privacy" className={styles.item}>Privacy policy</Link>
        </div>
    </div>
  );
};

export default Footer;
