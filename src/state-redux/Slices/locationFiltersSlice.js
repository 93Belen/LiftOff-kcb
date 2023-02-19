import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "locationFilters",
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
    },
  },
};

const locationFiltersSlice = createSlice(options);
export const { changeState } = locationFiltersSlice.actions;
export default locationFiltersSlice.reducer;
