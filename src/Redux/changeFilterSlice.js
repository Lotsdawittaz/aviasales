import { createSlice } from '@reduxjs/toolkit';

export const changeFilterSlice = createSlice({
  name: 'changeFilter',
  initialState: {
    value: { all: true, noChange: true, oneChange: true, twoChange: true, threeChange: true },
  },
  reducers: {
    all: (state) => {
      state.value.all = !state.value.all;
      state.value.noChange = state.value.all;
      state.value.oneChange = state.value.all;
      state.value.twoChange = state.value.all;
      state.value.threeChange = state.value.all;
    },
    noChange: (state) => {
      state.value.noChange = !state.value.noChange;
      if (!state.value.noChange) {
        state.value.all = false;
      }
      if (state.value.noChange && state.value.oneChange && state.value.twoChange && state.value.threeChange) {
        state.value.all = true;
      }
    },
    oneChange: (state) => {
      state.value.oneChange = !state.value.oneChange;
      if (!state.value.oneChange) {
        state.value.all = false;
      }
      if (state.value.noChange && state.value.oneChange && state.value.twoChange && state.value.threeChange) {
        state.value.all = true;
      }
    },
    twoChange: (state) => {
      state.value.twoChange = !state.value.twoChange;
      if (!state.value.twoChange) {
        state.value.all = false;
      }
      if (state.value.noChange && state.value.oneChange && state.value.twoChange && state.value.threeChange) {
        state.value.all = true;
      }
    },
    threeChange: (state) => {
      state.value.threeChange = !state.value.threeChange;
      if (!state.value.threeChange) {
        state.value.all = false;
      }
      if (state.value.noChange && state.value.oneChange && state.value.twoChange && state.value.threeChange) {
        state.value.all = true;
      }
    },
  },
});

export const { all, noChange, oneChange, twoChange, threeChange } = changeFilterSlice.actions;
export default changeFilterSlice.reducer;
