import React from "react";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
          <ul className={styles.box}>
            {/* these links should show you how to connect up a link to a specific route */}
            <li className={styles.liCover}>
              <Link to="/" className={styles.li}>Home</Link>
            </li>
            <li className={styles.liCover}>
              <Link to="/news" className={styles.li}>News</Link>
            </li>
            <li className={styles.liCover}>
              <Link to="/filter" className={styles.li}>Filter</Link>
            </li>
            <li className={styles.liCover}>
              <Link to="/aboutUs" className={styles.li}>About us</Link>
            </li>
          </ul>
  );
};

export default Nav;
