import React, {useEffect, useState} from "react";
import Styles from "./Other.module.css"

const Other = (props) => {

    return (
        <div className={Styles.box}>
            <div className={Styles.imgBox}>
                <img className={Styles.img} src="https://covid19.lacounty.gov/wp-content/uploads/GettyImages-1128687123-1024x683.jpg" alt="poster image"/>
            </div>
            <h5 className={Styles.title}>{props.title}</h5>
            <p className={Styles.content}>{props.content}</p>
        </div>
    )
}

export default Other
