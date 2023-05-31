import { createSlice } from '@reduxjs/toolkit';
// import { initialState } from './initialState';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState, 
  reducers: {
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = [...state.items, action.payload];
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.items = [...state.items, action.payload];
    },
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    delContact: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addContact, delContact, fetchingInProgress, fetchingSuccess, fetchingError } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
