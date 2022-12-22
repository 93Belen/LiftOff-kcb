import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'jwt',
    initialState: null,
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const jwtSlice = createSlice(options);
export const { changeState } = jwtSlice.actions;
export default jwtSlice.reducer;