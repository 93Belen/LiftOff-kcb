import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'businesses',
    initialState: null,
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const businessesSlice = createSlice(options);
export const { changeState } = businessesSlice.actions;
export default businessesSlice.reducer;


