import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "businessTypeFilters",
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

const businessTypeFiltersSlice = createSlice(options);
export const { changeState } = businessTypeFiltersSlice.actions;
export default businessTypeFiltersSlice.reducer;
