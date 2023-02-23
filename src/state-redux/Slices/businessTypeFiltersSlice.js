import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "businessTypeFilters",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        return [...state, action.payload];
      }
      return state;
    },
    removeFilter: (state, action) => {
      const index = state.indexOf(action.payload);
      if (index !== -1) {
        return [...state.slice(0, index), ...state.slice(index + 1)];
      }
      return state;
    },
  },
};

const businessTypeFiltersSlice = createSlice(options);
export const { changeState } = businessTypeFiltersSlice.actions;
export default businessTypeFiltersSlice.reducer;
