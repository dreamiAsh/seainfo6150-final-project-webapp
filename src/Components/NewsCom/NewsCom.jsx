import React, {useEffect, useState} from "react";
import styles from "./NewsCom.module.css";
import { Link } from "react-router-dom";
import NewsItem from "../NewsItem/NewsItem";

const NewsCom = (props) => {

    const [fetchedData, setFetchedData] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        // put data fetching code here!
        // performs a GET request
        const response = await fetch(
          "https://demo9533681.mockable.io/popularList"
        );
        const responseJson = await response.json();
        setFetchedData(responseJson);
      };
      fetchData();
    }, [fetchedData]);

    const myList = Object.values(fetchedData)
    const mappedList = myList.map((listItem) => (
      <NewsItem listItem={listItem}/>
    ))

    return (
        <div className={styles.box}>
            <ul>
                {mappedList}
            </ul>
        </div>
    );
};

export default NewsCom;
