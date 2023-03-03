import { configureStore } from '@reduxjs/toolkit';

import filterToggleReducer from './filterToggleSlice';
import changeFilterReducer from './changeFilterSlice';
import fetchSearchIdReducer, { fetchTicketsSlice } from './dataHandler';

export default configureStore({
  reducer: {
    filterToggle: filterToggleReducer,
    changeFilter: changeFilterReducer,
    getSearchId: fetchSearchIdReducer,
    getTickets: fetchTicketsSlice.reducer,
  },
});
