import React, {useEffect, useState} from "react";
import Styles from "./SearchPage.module.css"
import RecipeList from "../../Components/RecipeList/RecipeList"

const SearchPage = () => {

    const [clicked, setClicked] = useState();
    function onClick(e) {
        setClicked(true)
    }

    return (
        clicked ? 
        (<div>
            <div className={Styles.box}>
                <input className={Styles.searchInput} type="text" placeholder="  Enter a recipe name"/>
                <p className={Styles.searchButton} onClick={onClick}>Search</p>
            </div>
            <RecipeList/>
        </div>) 
        :
        (<div className={Styles.box}>
            <input className={Styles.searchInput} type="text" placeholder="  Enter a recipe name"/>
            <p className={Styles.searchButton} onClick={onClick}>Search</p>
        </div>)
    )
}

export default SearchPage
