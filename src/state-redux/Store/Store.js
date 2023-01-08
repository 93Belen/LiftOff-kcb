import { configureStore } from "@reduxjs/toolkit";
import businessesSlice from "../Slices/businesses";
import likedSlice from "../Slices/likedSlice";
import myBusinessSlice from "../Slices/myBusinessSlice";
import jwtSlice from '../Slices/jwt';
import loginInfoSlice from "../Slices/loginInfoSlice";

const store = configureStore({
    reducer: {
        businesses: businessesSlice,
        liked: likedSlice,
        myBusiness: myBusinessSlice,
        jwt: jwtSlice,
        loginInfo: loginInfoSlice
    }
})


export default store;