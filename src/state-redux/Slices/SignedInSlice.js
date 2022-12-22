import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'signedIn',
    initialState: false,
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const signedInSlice = createSlice(options);
export const { changeState } = signedInSlice.actions;
export default signedInSlice.reducer;