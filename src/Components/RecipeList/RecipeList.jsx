import React, {useEffect, useState} from "react";
import styles from "./RecipeList.module.css";
import RecipeItem from "../RecipeItem/RecipeItem"
import { isEmpty } from "lodash";

const RecipeList = (props) => {

  // const [fetchedData, setFetchedData] = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // put data fetching code here!
  //     // performs a GET request
  //     const response = await fetch(
  //       "http://demo9533681.mockable.io/recipeList"
  //     );
  //     const responseJson = await response.json();
  //     setFetchedData(responseJson);
  //   };
  //   if(isEmpty(fetchedData)) {
  //     fetchData();
  //   }
  // }, [fetchedData]);

    // const myList = Object.values(fetchedData)
    const myList = props.recipes
    const mappedList = myList.map((listItem) => (
      <RecipeItem recipe={listItem}/>
    ))

    return (
        <ul className={styles.recipeList}>{mappedList}</ul>
    )
}

export default RecipeList
