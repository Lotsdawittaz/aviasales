import { createSlice } from '@reduxjs/toolkit';

export const tabFilterToggle = createSlice({
  name: 'tabFilterToggle',
  initialState: { value: true },
  reducers: {
    setCheap: (state) => {
      state.value = true;
    },
    setFast: (state) => {
      state.value = false;
    },
  },
});

export const { setCheap, setFast } = tabFilterToggle.actions;
export default tabFilterToggle.reducer;
