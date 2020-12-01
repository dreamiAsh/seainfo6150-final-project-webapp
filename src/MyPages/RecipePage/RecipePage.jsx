import React from "react";
import styles from "./RecipePage.module.css";
import { Link, BrowserRouter } from "react-router-dom";

const RecipePage = (props) => {

    return (
        <div className={styles.box}>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.authorBox}>
                <BrowserRouter forceRefresh={true}><Link className={styles.author} to={`/author/${props.author}/${props.authorInfo}`}>By <span className={styles.authorInside}>{props.author}</span></Link></BrowserRouter>
                <p className={styles.reviews}>{props.reviews} Reviews</p>
                <p className={styles.likes}>{props.likes} Likes</p>
            </div>
            <div className={styles.imgBox}>
                <img className={styles.img} src={`https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%${props.imageId}.jpg&w=272&h=272&c=sc&poi=face&q=85`} alt="recipe image"/>
                <div className={styles.rightBox}>
                    <div className={styles.ingredientBox}>
                        <p className={styles.ingredientTitle}>Ingredient</p>
                        <p className={styles.ingredientContent}>{props.ingredient}</p>
                    </div>
                    <div className={styles.shortTextBox}>
                        <p className={styles.sign}>“</p>
                        <p className={styles.shortText}>{props.shortText}</p>
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.step}>Step 1</p>
                <p>{props.step1}</p>
                <p className={styles.step}>Step 2</p>
                <p>{props.step2}</p>
            </div>
        </div>
    );
};

export default RecipePage;
