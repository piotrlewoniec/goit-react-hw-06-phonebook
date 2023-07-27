import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers';
import { contactsReducer } from './contactsslice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;
