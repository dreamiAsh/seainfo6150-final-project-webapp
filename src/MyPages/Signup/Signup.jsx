import React, {useEffect, useState} from "react";
import styles from "./Signup.module.css";

const Signup = () => {

  const [submittedForm, setSubmittedForm] = useState();
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
                    <div className={styles.heard}>
                    <label htmlFor="heard">How did you hear about Home Recipe? </label>
                    <input type="text" name="heard" id="heard"/>
                    </div>
                    <div className={styles.food}>
                    <label htmlFor="food">What's your favorate food? </label>
                    <input type="text" name="food" id="food"/>
                    </div>
                    <div className={styles.taboos}>
                    <label htmlFor="taboos">Do you have any taboos? </label>
                    <input type="text" name="taboos" id="taboos"/>
                    </div>
                    <div className={styles.genderBox}>
                    <label htmlFor="myDropdownId">Gender: </label>
                    <select name="myDropdown" id="myDropdownId">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    </div>
                    <div className={styles.ageBox}>
                        <label htmlFor="ageDropdownId">Age: </label>
                        <select name="ageDropdownId" id="ageDropdownId">
                            <option value="10">10-20</option>
                            <option value="20">20-30</option>
                            <option value="30">30-40</option>
                            <option value="40">40-50</option>
                            <option value="50">50+</option>
                        </select>
                    </div>
                    <div className={styles.checkBox}>
                        <p>Interested in</p>
                        <label htmlFor="hotPot" className={styles.checkItem}>Hot pot
                            <input type="checkbox" name="hotPot" className={styles.inputItem} />
                        </label>
                        <label htmlFor="BBQ" className={styles.checkItem}>BBQ
                            <input type="checkbox" name="BBQ" className={styles.inputItem} />
                        </label>
                        <label htmlFor="salad" className={styles.checkItem}>Salad
                            <input type="checkbox" name="salad" className={styles.inputItem} />
                        </label>
                    </div>
                    <input className={styles.submit} type="submit" value="Sign up" />
                </form>
            ) : 
                (<p className={styles.welcome}>Thank you for joining us {submittedForm.get("username")}!</p>)
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
            <div className={styles.heard}>
              <label htmlFor="heard">How did you hear about Home Recipe? </label>
              <input type="text" name="heard" id="heard"/>
            </div>
            <div className={styles.food}>
              <label htmlFor="food">What's your favorate food? </label>
              <input type="text" name="food" id="food"/>
            </div>
            <div className={styles.taboos}>
              <label htmlFor="taboos">Do you have any taboos? </label>
              <input type="text" name="taboos" id="taboos"/>
            </div>
            <div className={styles.genderBox}>
              <label htmlFor="myDropdownId">Gender: </label>
              <select name="myDropdown" id="myDropdownId">
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className={styles.ageBox}>
                <label htmlFor="ageDropdownId">Age: </label>
                <select name="ageDropdownId" id="ageDropdownId">
                    <option value="10">10-20</option>
                    <option value="20">20-30</option>
                    <option value="30">30-40</option>
                    <option value="40">40-50</option>
                    <option value="50">50+</option>
                </select>
            </div>
            <div className={styles.checkBox}>
                <p>Interested in</p>
                <label htmlFor="hotPot" className={styles.checkItem}>Hot pot
                    <input type="checkbox" name="hotPot" className={styles.inputItem} />
                </label>
                <label htmlFor="BBQ" className={styles.checkItem}>BBQ
                    <input type="checkbox" name="BBQ" className={styles.inputItem} />
                </label>
                <label htmlFor="salad" className={styles.checkItem}>Salad
                    <input type="checkbox" name="salad" className={styles.inputItem} />
                </label>
            </div>
            <input className={styles.submit} type="submit" value="Sign up" />
          </form>
        )
      }
    </div>
  )
}

export default Signup
