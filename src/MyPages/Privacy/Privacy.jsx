import React, {useEffect, useState} from "react";
import Styles from "./Privacy.module.css"
import Other from "../../Components/Other/Other"

const Privacy = (props) => {

    return (
        <div className={Styles.box}>
            <Other title="Privacy Policy" content="Effective Date: February 12, 2020. 

We are HomeRecipe! HomeRecipe focus on providing you with destinations you can trust and rely on for every stage of your life to connect you to great content, products and services and personalize your experience with us.

Our mission is to be clear and transparent about how and why we collect and use information and to empower you to control your personal information. You are not our product, you are our customer.

When Does this Policy Apply?

This Privacy Statement applies when you interact with National Media Group brands (“Brands”), a division of Meredith Corporation, through their websites, mobile apps, email communications and other platforms (our “Sites”)  To read our EU Privacy Statement click here."/>
            <p className={Styles.q1}>What Personal Information Do Our Brands Collect about You?</p>
            <ul className={Styles.ulBox}>
                <li className={Styles.li}>* Contact Information (such as name, phone number, postal address or email address)</li>
                <li>* Account/Registration Information (such as user name and password, reminder questions and answers and communications preferences, e.g. signing up for a newsletter or sweepstake, registering for an offer or an experience, or making a purchase)</li>
                <li>* Payment Information (such as name, billing address, and credit card information, e.g. when making a purchase)</li>
                <li>* Demographic information (such as age, gender race, income, occupation, marital status, and information about your household/family status, including your household size and the length of time at your residence)</li>
                <li>* Online identifiers (such as IP address, internal and third party identifiers, advertising identifiers and device information like unique device ID)</li>
            </ul>
        </div>
    )
}

export default Privacy
