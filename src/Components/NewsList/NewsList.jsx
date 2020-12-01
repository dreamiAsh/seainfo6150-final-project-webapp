import React, {useEffect, useState} from "react";
import styles from "./NewsList.module.css";
import { Link } from "react-router-dom";

const NewsList = (props) => {

  const [fetchedData2, setFetchedData2] = useState({});
  useEffect(() => {
    const fetchData2 = async () => {
      // put data fetching code here!
      // performs a GET request
      const response = await fetch(
        "http://demo9533681.mockable.io/whatList"
      );
      const responseJson = await response.json();
      setFetchedData2(responseJson);
    };
    fetchData2();
  }, [fetchedData2]);

  const [fetchedData, setFetchedData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      // put data fetching code here!
      // performs a GET request
      const response = await fetch(
        "http://demo9533681.mockable.io/popularList"
      );
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };
    fetchData();
  }, [fetchedData]);

  const myList = Object.values(fetchedData)
  const mappedList = myList.map((listItem) => (
    <Link forceRefresh={true} className={styles.item} to={`/news/${listItem.title}/${listItem.date}/${listItem.imageId}/${listItem.content}`}>{listItem.title}</Link>
  ))

  const myList2 = Object.values(fetchedData2)
  const mappedList2 = myList2.map((listItem) => (
    <Link forceRefresh={true} className={styles.item} to={`/news/${listItem.title}/${listItem.date}/${listItem.imageId}/${listItem.content}`}>{listItem.title}</Link>
  ))

  return (
    <div className={styles.box}>
        <div className={styles.leftBox}>
            <h4 className={styles.itemTitle}>What's new</h4>
            <ul>{mappedList}</ul>
        </div>
        <div className={styles.rightBox}>
            <h4 className={styles.itemTitle}>Most popular</h4>
            <ul>{mappedList2}</ul>
        </div>
    </div>
  );
};

export default NewsList;
