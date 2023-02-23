import { configureStore } from "@reduxjs/toolkit";
import businessesSlice from "../Slices/businesses";
import likedSlice from "../Slices/likedSlice";
import myBusinessSlice from "../Slices/myBusinessSlice";
import jwtSlice from "../Slices/jwt";
import loginInfoSlice from "../Slices/loginInfoSlice";
import editingAddingSlice from "../Slices/editing-adding";
import businessToEditSlice from "../Slices/businessToEditSlice";
import locationFiltersSlice from "../Slices/locationFiltersSlice";
import businessTypeFiltersSlice from "../Slices/businessTypeFiltersSlice";
import ownerTypeFiltersSlice from "../Slices/ownerTypeFiltersSlice";
import businessesUnmodifiedSlice from "../Slices/businessesUnmodifiedSlice";

const store = configureStore({
  reducer: {
    businesses: businessesSlice,
    liked: likedSlice,
    myBusiness: myBusinessSlice,
    jwt: jwtSlice,
    loginInfo: loginInfoSlice,
    editingAdding: editingAddingSlice,
    businessToEdit: businessToEditSlice,
    locationFilters: locationFiltersSlice,
    businessTypeFilters: businessTypeFiltersSlice,
    ownerTypeFilters: ownerTypeFiltersSlice,
    businessesUnmodified: businessesUnmodifiedSlice,
  },
});

export default store;
