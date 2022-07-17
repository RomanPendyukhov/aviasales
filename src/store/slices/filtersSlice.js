/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    valueFilterTransfer: [],
    sortType: 'cheap',
    showAllTickets: true,
  },
  reducers: {
    sortTicketByPrice(state, action) {
      state.sortType = action.payload;
    },

    sortTicketByDuration(state, action) {
      state.sortType = action.payload;
    },

    sortTicketOptimal(state, action) {
      state.sortType = action.payload;
    },
    switchFilterAll(state, action) {
      state.showAllTickets = action.payload;
    },

    setValueFilterTicket(state, action) {
      if (action.payload.isChecked) {
        state.valueFilterTransfer.push(action.payload.filterValue);
      } else {
        state.valueFilterTransfer = state.valueFilterTransfer.filter((item) => item !== action.payload.filterValue);
      }
    },
  },
});

export const { sortTicketByPrice, sortTicketByDuration, sortTicketOptimal, switchFilterAll, setValueFilterTicket } =
  filtersSlice.actions;

export default filtersSlice.reducer;
