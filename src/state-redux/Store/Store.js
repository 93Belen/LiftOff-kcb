import { configureStore } from "@reduxjs/toolkit";
import businessesSlice from "../Slices/businesses";
import likedSlice from "../Slices/likedSlice";
import myBusinessSlice from "../Slices/myBusinessSlice";
import jwtSlice from '../Slices/jwt';
import loginInfoSlice from "../Slices/loginInfoSlice";
import editingAddingSlice from "../Slices/editing-adding";

const store = configureStore({
    reducer: {
        businesses: businessesSlice,
        liked: likedSlice,
        myBusiness: myBusinessSlice,
        jwt: jwtSlice,
        loginInfo: loginInfoSlice,
        editingAdding: editingAddingSlice
    }
})


export default store;