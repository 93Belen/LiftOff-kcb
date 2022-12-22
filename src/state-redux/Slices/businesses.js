import { createSlice } from "@reduxjs/toolkit";

const options = {
    name: 'businesses',
    initialState: {},
    reducers: {
        changeState: (state, action) => {
            state = action.payload
            return state
        }
    }
}


const businessesSlice = createSlice(options);
export const { changeState } = businessesSlice.actions;
export default businessesSlice.reducer;




// {
//     all: [],
//     jackson: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     clinton: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     caldwell: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     platte: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     clay: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     ray: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     leavenworth: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     wyandote: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     lafayette: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     johnson: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     miami: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     cass: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     linn: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },
//     bates: {
//         coffe: [],
//         food: [],
//         clothing: [],
//         homegoods: [],
//         others: []
//     },

// }