import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'businessToEdit',
    initialState: null,
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const businessToEdit = createSlice(options);
export const { changeState } = businessToEdit.actions;
export default businessToEdit.reducer;