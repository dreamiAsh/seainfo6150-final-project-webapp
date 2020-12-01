import React, {useEffect, useState} from "react";
import styles from "./Author.module.css";
import RecipeList from "../../Components/RecipeList/RecipeList"

const Author = (props) => {

    return (
        <div>
            <p className={styles.author}>Author:   <span className={styles.inAuthor}>{props.author}</span></p>
            <p className={styles.authorInfo}>Self-introduction:   <span className={styles.inAuthorInfo}>{props.authorInfo}</span></p>
            <p className={styles.guess}>Guess you may like</p>
            <RecipeList/>
        </div>
    )
}

export default Author
