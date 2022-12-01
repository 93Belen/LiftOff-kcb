import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'displayed',
    initialState: [],
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const displayedSlice = createSlice(options);
export const { changeState } = displayedSlice.actions;
export default displayedSlice.reducer;