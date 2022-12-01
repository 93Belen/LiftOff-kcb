import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'myBusiness',
    initialState: [],
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const myBusinessSlice = createSlice(options);
export const { changeState } = myBusinessSlice.actions;
export default myBusinessSlice.reducer;