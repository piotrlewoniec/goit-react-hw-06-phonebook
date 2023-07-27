import { createSlice } from '@reduxjs/toolkit';

const initialState = [{}];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: state => {
      //   state.contacts += 1;
      console.log(state.contacts, 'addition');
    },
    deleteContact: state => {
      //   state.contacts -= 1;
      console.log(state.contacts, 'deletation');
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
