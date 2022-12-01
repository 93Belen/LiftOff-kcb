import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'isBusinessOwner',
    initialState: true,
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const isBusinessOwnerSlice = createSlice(options);
export const { changeState } = isBusinessOwnerSlice.actions;
export default isBusinessOwnerSlice.reducer;