import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'idsToDisplay',
    initialState: [],
    reducers: {
        addId: (state, action) => {
            if(!state.includes(action.payload)){
                state.push(action.payload)
            }
        },
        removeId: (state, action) => {
            let newStateCounty = state.filter((id) => id !== action.payload)
            state.county = newStateCounty;
            return state;
        }
    }
}


const idsToDisplaySlice = createSlice(options);
export const { addId, removeId } = idsToDisplaySlice.actions;
export default idsToDisplaySlice.reducer;