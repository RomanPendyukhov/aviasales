import { configureStore } from '@reduxjs/toolkit';

import ticketReducer from './slices/ticketsSlice';
import filterReducer from './slices/filtersSlice';

export default configureStore({
  reducer: {
    tickets: ticketReducer,
    filters: filterReducer,
  },
});
