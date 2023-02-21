import { configureStore } from "@reduxjs/toolkit";
import businessesSlice from "../Slices/businesses";
import likedSlice from "../Slices/likedSlice";
import myBusinessSlice from "../Slices/myBusinessSlice";
import jwtSlice from "../Slices/jwt";
import loginInfoSlice from "../Slices/loginInfoSlice";
import editingAddingSlice from "../Slices/editing-adding";
import businessToEditSlice from "../Slices/businessToEditSlice";
import filtersSlice from '../Slices/filersSlice';
import idsToDisplaySlice from "../Slices/idsToDisplaySlice";
import businessToDisplaySlice from "../Slices/businessToDisplay";

const store = configureStore({
  reducer: {
    businesses: businessesSlice,
    liked: likedSlice,
    myBusiness: myBusinessSlice,
    jwt: jwtSlice,
    loginInfo: loginInfoSlice,
    editingAdding: editingAddingSlice,
    businessToEdit: businessToEditSlice,
    filters: filtersSlice,
    idsToDisplay: idsToDisplaySlice,
    businessToDisplay: businessToDisplaySlice
  },
});

export default store;
