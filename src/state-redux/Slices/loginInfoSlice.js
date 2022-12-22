import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'loginInfo',
    initialState: {},
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const loginInfoSlice = createSlice(options);
export const { changeState } = loginInfoSlice.actions;
export default loginInfoSlice.reducer;