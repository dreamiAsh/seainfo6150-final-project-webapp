import React from 'react'
import styles from "./NewsItem.module.css";
import { Link, BrowserRouter } from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div>
            <BrowserRouter forceRefresh={true}><Link className={styles.box} to={`/news/${props.listItem.title}/${props.listItem.date}/${props.listItem.imageId}/${props.listItem.content}`}>
                <img className={styles.img} src={`https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%${props.listItem.imageId}.jpg&w=272&h=272&c=sc&poi=face&q=85`} alt=""/>
                
                <div className={styles.rightBox}>
                    <h6 className={styles.title}>{props.listItem.title}</h6>
                    <p className={styles.date}>{props.listItem.date}</p>
                </div>
                
            </Link></BrowserRouter>
        </div>
    )
}

export default NewsItem
