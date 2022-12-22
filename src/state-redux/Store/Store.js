import { configureStore } from "@reduxjs/toolkit";
import businessesSlice from "../Slices/businesses";
import isBusinessOwnerSlice from "../Slices/isBusinessOwnerSlice";
import likedSlice from "../Slices/likedSlice";
import myBusinessSlice from "../Slices/myBusinessSlice";
import signedInSlice from "../Slices/SignedInSlice";
import jwtSlice from '../Slices/jwt';
import loginInfoSlice from "../Slices/loginInfoSlice";

const store = configureStore({
    reducer: {
        signedIn: signedInSlice,
        isBusinessOwner: isBusinessOwnerSlice,
        businesses: businessesSlice,
        liked: likedSlice,
        myBusiness: myBusinessSlice,
        jwt: jwtSlice,
        loginInfo: loginInfoSlice
    }
})


export default store;