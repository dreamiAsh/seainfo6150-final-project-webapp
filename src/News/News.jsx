import React from 'react'
import Styles from "./News.module.css"
import NewsCom from "../Components/NewsCom/NewsCom"

const News = () => {
    return (
        <div className={Styles.box}>
            <NewsCom/>
        </div>
    )
}

export default News
