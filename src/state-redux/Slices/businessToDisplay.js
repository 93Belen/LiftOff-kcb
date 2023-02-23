import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'businessToDisplay',
    initialState: [],
    reducers: {
        changeState: (state, action) => {
            state = action.payload;
            return state;
        }
    }
}


const businessToDisplaySlice = createSlice(options);
export const { changeState } = businessToDisplaySlice.actions;
export default businessToDisplaySlice.reducer;