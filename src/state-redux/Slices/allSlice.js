import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'all',
    initialState: [],
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const allSlice = createSlice(options);
export const { changeState } = allSlice.actions;
export default allSlice.reducer;