import { createSlice } from '@reduxjs/toolkit';

export const changeFilterSlice = createSlice({
  name: 'changeFilter',
  initialState: {
    all: true,
    noChange: true,
    oneChange: true,
    twoChange: true,
    threeChange: true,
  },
  reducers: {
    all: (state) => {
      state.all = !state.all;
      state.noChange = state.all;
      state.oneChange = state.all;
      state.twoChange = state.all;
      state.threeChange = state.all;
    },
    noChange: (state) => {
      console.log(state.noChange);
      state.noChange = !state.noChange;
      if (!state.noChange) {
        state.all = false;
      }
      if (state.noChange && state.oneChange && state.twoChange && state.threeChange) {
        state.all = true;
      }
    },
    oneChange: (state) => {
      state.oneChange = !state.oneChange;
      if (!state.oneChange) {
        state.all = false;
      }
      if (state.noChange && state.oneChange && state.twoChange && state.threeChange) {
        state.all = true;
      }
    },
    twoChange: (state) => {
      state.twoChange = !state.twoChange;
      if (!state.twoChange) {
        state.all = false;
      }
      if (state.noChange && state.oneChange && state.twoChange && state.threeChange) {
        state.all = true;
      }
    },
    threeChange: (state) => {
      state.threeChange = !state.threeChange;
      if (!state.threeChange) {
        state.all = false;
      }
      if (state.noChange && state.oneChange && state.twoChange && state.threeChange) {
        state.all = true;
      }
    },
  },
});

export const { all, noChange, oneChange, twoChange, threeChange } = changeFilterSlice.actions;
export default changeFilterSlice.reducer;
