import { isAllOf } from "@reduxjs/toolkit";
import { businessType } from "../../svg-buttons/business-type";
import { BodyHomePage } from "../Body/BodyHomePage";
import { HeaderHomePage } from "../Header/HeaderHomePage";
import { getAllBusinesses, tranformIntoObj } from "../../call-backend/getAllBusinesses";


export const HomePage = () => {
    // fetch all businesses here and store them in redux
     const arr = [
        {
        businessDetails: {id: 1, description: "A sweet spot that offers a variety of delicious ice cream flavors.", websiteUrl: "brandonicecream.com"},
        businessLocation: {
            buildingNumber: "369",
            city: "Overland Park",
            county: "Johnson",
            id: 1,
            state: "Kansas",
            streetName: "Metcalf Avenue",
            zipCode: 66212
        },
        businessType: {id: 1, name: "food and coffee"},
        id: 1,
        name: "Brandon's Ice Cream Shop",
        owner: {id: 28, username: "owner@owner.com"},
        ownerType: [
            {
                name: "latino"
            },
            {
                name: "black"
            }
        ]
    },

    // businessLocation.county, businessType.name, id, ownerType 
    {
        businessDetails: {id: 2, description: "A sweet spot that offers a variety of delicious ice cream flavors.", websiteUrl: "brandonicecream.com"},
        businessLocation: {
            buildingNumber: "369",
            city: "Overland Park",
            county: "Miami",
            id: 1,
            state: "Kansas",
            streetName: "Metcalf Avenue",
            zipCode: 66212
        },
        businessType: {id: 1, name: "Home Goods"},
        id: 2,
        name: "Brandon's Ice Cream Shop",
        owner: {id: 28, username: "owner@owner.com"},
        ownerType: [
            {
                name: "lgbtqia"
            }
        ]
    },
    {
        businessDetails: {id: 3, description: "A sweet spot that offers a variety of delicious ice cream flavors.", websiteUrl: "brandonicecream.com"},
        businessLocation: {
            buildingNumber: "369",
            city: "Overland Park",
            county: "Linn",
            id: 1,
            state: "Kansas",
            streetName: "Metcalf Avenue",
            zipCode: 66212
        },
        businessType: {id: 1, name: "Lawyer"},
        id: 3,
        name: "Brandon's Ice Cream Shop",
        owner: {id: 28, username: "owner@owner.com"},
        ownerType: [
            {
                name: "asian"
            },
            {
                name: "woman"
            }
        ]
    }
]
    

    const response = getAllBusinesses().then(resp => tranformIntoObj(arr));
    console.log(response)


    return (
        <div id='homepage'>
            <HeaderHomePage />
            <BodyHomePage />
        </div>
    )
}






// all: [],
// byCounty: {
    // all: [],
    // byOwner: {
    //     all: [],
    //     businessType: {}
    // },
    // byBusinessType: {},
// },
// byOwner: {},
// byBusinessType: {}

