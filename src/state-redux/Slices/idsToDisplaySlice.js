import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'idsToDisplay',
    initialState: [],
    reducers: {
        addId: (state, action) => {
            if(!state.includes(action.payload)){
                state.push(action.payload)
            }
            return state;
        },
        removeId: (state, action) => {
            let newStateCounty = state.filter((id) => id !== action.payload)
            state.county = newStateCounty;
            return state;
        },
        removeAllIds: (state, action) => {
            state = [];
            return state;
        },
        changeAllIds: (state, action) => {
            state = action.payload;
            return state;
        }
    }
}


const idsToDisplaySlice = createSlice(options);
export const { addId, removeId, removeAllIds, changeAllIds } = idsToDisplaySlice.actions;
export default idsToDisplaySlice.reducer;