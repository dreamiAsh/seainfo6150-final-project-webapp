import React, {useEffect, useState} from "react";
import styles from "./Signin.module.css";
import { Link } from "react-router-dom";

const Signin = () => {

  const [submittedForm, setSubmittedForm, submitFail] = useState();
  function onSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    setSubmittedForm(data);
  };

  return (
    <div>
      {
        submittedForm ? 
            (<p className={styles.welcome}>Welcome back {submittedForm.get("username")}!</p>)
        : (
          <form onSubmit={onSubmit}>
            <div className={styles.usernameBox}>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="username" required="required"/>
            </div>
            <div className={styles.passwordBox}>
              <label htmlFor="password">Password: </label>
              <input type="text" name="password" id="password" required="required"/>
            </div>
            <Link to="/signup" className={styles.signupBotton}>Sign up here</Link>
            <input className={styles.submit} type="submit" value="Sign in" />
          </form>
        )
      }
    </div>
  )
}

export default Signin
