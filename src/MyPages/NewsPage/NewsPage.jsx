import React from "react";
import styles from "./NewsPage.module.css";

const NewsPage = (props) => {
  return (
    <div className={styles.box}>
            <p className={styles.title}>{props.title}</p>
            <div className={styles.dateBox}>
                <p className={styles.date}>{props.date}</p>
            </div>
            <div className={styles.imgBox}>
                <img className={styles.img} src={`https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%${props.imageId}.jpg&w=272&h=272&c=sc&poi=face&q=85`} alt=""/>
                <div className={styles.rightBox}>
                    <p className={styles.content}>{props.content}</p>
                </div>
            </div>
        </div>
  );
};

export default NewsPage;
