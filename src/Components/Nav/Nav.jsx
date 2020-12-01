import React from "react";
import styles from "./Nav.module.css";
import { BrowserRouter, Link } from "react-router-dom";

const Nav = (props) => {
  return (
          <ul className={styles.box}>
            {/* these links should show you how to connect up a link to a specific route */}
            <li className={styles.liCover}>
              <BrowserRouter basename={process.env.PUBLIC_URL} forceRefresh={true}><Link to="/" className={styles.li}>Home</Link></BrowserRouter>
            </li>
            <li className={styles.liCover}>
              <BrowserRouter basename={process.env.PUBLIC_URL} forceRefresh={true}><Link to="/news" className={styles.li}>News</Link></BrowserRouter>
            </li>
            <li className={styles.liCover}>
              <BrowserRouter forceRefresh={true}><Link to="/filter" className={styles.li}>Filter</Link></BrowserRouter>
            </li>
            <li className={styles.liCover}>
              <BrowserRouter forceRefresh={true}><Link to="/aboutUs" className={styles.li}>About us</Link></BrowserRouter>
            </li>
          </ul>
  );
};

export default Nav;
