import { isAllOf } from "@reduxjs/toolkit";
import { businessType } from "../../svg-buttons/business-type";
import { BodyHomePage } from "../Body/BodyHomePage";
import { HeaderHomePage } from "../Header/HeaderHomePage";
import { getBusinessFromBackEnd } from "../../call-backend/getAllBusinesses";


export const HomePage = () => {
    // fetch all businesses here and store them in redux
    getBusinessFromBackEnd().then(response => console.log(response));


    return (
        <div id='homepage'>
            <HeaderHomePage />
            <BodyHomePage />
        </div>
    )
}






