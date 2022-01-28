import { createSlice } from '@reduxjs/toolkit';
import { filterContacts } from './contacts-actions';
import contactsOperations from './contacts-operations';

const initialState = {
  contacts: [],
  filter: '',
  loading: false,
};

const contactsSlice = createSlice({
  name: 'phoneBook',
  initialState,
  extraReducers: {
    [contactsOperations.fetchAllContacts.pending](state) {
      state.loading = true;
    },
    [contactsOperations.fetchAllContacts.fulfilled](state, { payload }) {
      state.contacts = [...payload];
      state.loading = false;
    },
    [contactsOperations.addNewContact.pending](state) {
      state.loading = true;
    },
    [contactsOperations.addNewContact.fulfilled](state, { payload }) {
      state.contacts = [...state.contacts, payload.data.result];
      state.loading = false;
    },
    [contactsOperations.deleteOneContact.pending](state) {
      state.loading = true;
    },
    [contactsOperations.deleteOneContact.fulfilled](state, { payload }) {
      state.contacts = state.contacts.filter(({ _id }) => _id !== payload);
      state.loading = false;
    },
    [filterContacts](state, { payload }) {
      state.filter = payload;
    },
  },
});

export default contactsSlice.reducer;
