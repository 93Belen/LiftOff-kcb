import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'filters',
    initialState: {
        county: [],
        businesstype: [],
        ownertype: []
    },
    reducers: {
        addCounty: (state, action) => {
            state.county.push(action.payload)
            return state;
        },
        removeCounty: (state, action) => {
            let newStateCounty = state.county.filter((county) => county !== action.payload)
            state.county = newStateCounty;
            return state;
        },
        addBusinessType: (state, action) => {
            state.businesstype.push(action.payload)
            return state;
        },
        removeBusinessType: (state, action) => {
            let newStateBusiness = state.businesstype.filter((businesstype) => businesstype !== action.payload)
            state.businesstype = newStateBusiness;
            return state;
        },
        addOwnerType: (state, action) => {
            state.ownertype.push(action.payload)
            return state;
        },
        removeOwnerType: (state, action) => {
            let  newStateOwner = state.ownertype.filter((ownertype) => ownertype !== action.payload)
            state.ownertype = newStateOwner;
            return state;
        }
    }
}


const filtersSlice = createSlice(options);
export const { addCounty, addBusinessType, addOwnerType, removeCounty, removeBusinessType, removeOwnerType } = filtersSlice.actions;
export default filtersSlice.reducer;