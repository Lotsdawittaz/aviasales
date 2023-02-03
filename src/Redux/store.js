import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';
import filterToggleReducer from './filterToggleSlice';
import changeFilterReducer from './changeFilterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    filterToggle: filterToggleReducer,
    changeFilter: changeFilterReducer,
  },
});
