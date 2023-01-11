import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'editingAdding',
    initialState: 'adding',
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const editingAddingSlice = createSlice(options);
export const { changeState } = editingAddingSlice.actions;
export default editingAddingSlice.reducer;