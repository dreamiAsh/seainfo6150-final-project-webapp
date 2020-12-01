import React, {useEffect, useState} from "react";
import styles from "./FilterPage.module.css";
import { Switch, Route, Link } from "react-router-dom";
import RecipeList from "../../Components/RecipeList/RecipeList"

const FilterPage = (props) => {
    const [clicked, setClicked] = useState();
    function onClick(e) {
        setClicked(true)
    }

    return (
        clicked ? (<div>
                        <div className={styles.box}>
                            <button className={styles.button} onClick={onClick}>Fast food</button>
                            <button className={styles.button} onClick={onClick}>Dessert</button>
                            <button className={styles.button} onClick={onClick}>Lamp</button>
                        </div>
                        <RecipeList/>
                    </div>)
          :
          (<div className={styles.box}>
                <button className={styles.button} onClick={onClick}>Fast food</button>
                <button className={styles.button} onClick={onClick}>Dessert</button>
                <button className={styles.button} onClick={onClick}>Lamp</button>
          </div>)
    );
};

export default FilterPage;
