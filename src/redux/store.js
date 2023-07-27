import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsslice';
import filterReducer from './searchfilterslice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export default store;
