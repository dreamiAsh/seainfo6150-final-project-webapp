import React, {useEffect, useState} from "react";
import styles from "./Signin.module.css";
import { Link, BrowserRouter } from "react-router-dom";

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
        submittedForm ? (
          submittedForm.get("username").length < 6 || submittedForm.get("password").length < 6? (
            <form onSubmit={onSubmit}>
              <p className={styles.alert}>Username and password should have at least 6 characters!</p>
              <div className={styles.usernameBox}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" id="username"/>
              </div>
              <div className={styles.passwordBox}>
                <label htmlFor="password">Password: </label>
                <input type="text" name="password" id="password"/>
              </div>
              <BrowserRouter forceRefresh={true}><Link to="/signup" className={styles.signupBotton}>Sign up here</Link></BrowserRouter>
              <input className={styles.submit} type="submit" value="Sign in" />
            </form>
          ) : 
            (<p className={styles.welcome}>Welcome back {submittedForm.get("username")}!</p>)
        ) : (
          <form onSubmit={onSubmit}>
            <div className={styles.usernameBox}>
              <label htmlFor="username">Username: </label>
              <input type="text" name="username" id="username"/>
            </div>
            <div className={styles.passwordBox}>
              <label htmlFor="password">Password: </label>
              <input type="text" name="password" id="password"/>
            </div>
            <BrowserRouter forceRefresh={true}><Link to="/signup" className={styles.signupBotton}>Sign up here</Link></BrowserRouter>
            <input className={styles.submit} type="submit" value="Sign in" />
          </form>
        )
      }
    </div>
  )
}

export default Signin
