import { configureStore } from "@reduxjs/toolkit";
import allSlice from "../Slices/allSlice";
import displayedSlice from "../Slices/displayedSlice";
import isBusinessOwnerSlice from "../Slices/isBusinessOwnerSlice";
import likedSlice from "../Slices/likedSlice";
import myBusinessSlice from "../Slices/myBusinessSlice";
import signedInSlice from "../Slices/SignedInSlice";

const store = configureStore({
    reducer: {
        signedIn: signedInSlice,
        isBusinessOwner: isBusinessOwnerSlice,
        all: allSlice,
        displayed: displayedSlice,
        liked: likedSlice,
        myBusiness: myBusinessSlice
    }
})


export default store;