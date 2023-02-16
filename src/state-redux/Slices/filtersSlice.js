import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'filters',
    initialState: [],
    reducers: {
        toggleFilter: (state, action) => {
            const index = state.indexOf(action.payload);
            if (index === -1) {
                state = state.concat(action.payload);
            } else {
                state = [...state.slice(0, index), ...state.slice(index + 1)];
            }
            return state;
        }
    }
}


const filtersSlice = createSlice(options);
export const { changeState } = filtersSlice.actions;
export default filtersSlice.reducer;