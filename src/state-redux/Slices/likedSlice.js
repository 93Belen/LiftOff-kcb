import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'liked',
    initialState: [],
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const likedSlice = createSlice(options);
export const { changeState } = likedSlice.actions;
export default likedSlice.reducer;