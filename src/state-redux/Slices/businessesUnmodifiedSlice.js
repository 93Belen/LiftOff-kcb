import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'businessesUnmodified',
    initialState: {},
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const businessesUnmodifiedSlice = createSlice(options);
export const { changeState } = businessesUnmodifiedSlice.actions;
export default businessesUnmodifiedSlice.reducer;


