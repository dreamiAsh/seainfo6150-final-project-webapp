import React, {useEffect, useState} from "react";
import styles from "./Home.module.css";
import NewsList from "../Components/NewsList/NewsList"
import RecipeItem from "../Components/RecipeItem/RecipeItem"
import RecipeList from "../Components/RecipeList/RecipeList"

const Home = () => {

    return (
        <div>
            <div className={styles.imgBox}>
                <img className={styles.img} src="https://images.squarespace-cdn.com/content/v1/5dedf21b7c131a3015fd5ad5/1575948055123-VLZ49JEXIYF8QMAABP6F/ke17ZwdGBToddI8pDm48kGNd1IaaP_-ea7nYNEFHDsp7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UUIsyChEB7CNmEcY1NH_HD7WSuQ7QDejvk14LXDmYznTAN43Xjxxvi5UJclDbUAqLw/DSC04905-43_web.jpg?format=2500w" alt="food poster"/>
            </div>
            <NewsList/>
            <RecipeList/>
        </div>
    )
}

export default Home
