import React from "react";
import styles from "./RecipeItem.module.css";
import { Link, BrowserRouter } from "react-router-dom";

const RecipeItem = (props) => {
  return (
    <BrowserRouter forceRefresh={true}><Link to={`/recipe/${props.recipe.title}/${props.recipe.imageId}/${props.recipe.author}/${props.recipe.authorInfo}/${props.recipe.reviews}/${props.recipe.likes}/${props.recipe.shortText}/${props.recipe.ingredient}/${props.recipe.step1}/${props.recipe.step2}`}  className={styles.box}>
        <div className={styles.imgBox}>
          <img src={props.recipe.image} alt="recipe image"  className={styles.img}/>
        </div>
        <p className={styles.title}>{props.recipe.title}</p>
        <p className={styles.by}>By <span  className={styles.author}>{props.recipe.author}</span></p>
    </Link></BrowserRouter>
  );
};

export default RecipeItem;
