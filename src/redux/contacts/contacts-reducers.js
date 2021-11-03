import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from '../contacts/contacts-actions';
import {
  fetchAllContacts,
  addNewContact,
  deleteOneContact,
} from './contacts-operations';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
  loading: false,
  error: null,
};

export const contacts = createReducer(INITIAL_STATE.contacts, {
  [fetchAllContacts.fulfilled]: (_, { payload }) => payload,
  [addNewContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteOneContact.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

export const filter = createReducer(INITIAL_STATE.filter, {
  [filterContacts]: (_, { payload }) => payload,
});

export const loading = createReducer(INITIAL_STATE.loading, {
  [fetchAllContacts.pending]: () => true,
  [fetchAllContacts.fulfilled]: () => false,
  [fetchAllContacts.rejected]: () => false,
  [addNewContact.pending]: () => true,
  [addNewContact.fulfilled]: () => false,
  [addNewContact.rejected]: () => false,
  [deleteOneContact.pending]: () => true,
  [deleteOneContact.fulfilled]: () => false,
  [deleteOneContact.rejected]: () => false,
});

export const error = createReducer(INITIAL_STATE.error, {
  [addNewContact.pending]: () => null,
  [addNewContact.rejected]: (_, action) => action.payload,
  [deleteOneContact.pending]: () => null,
  [deleteOneContact.rejected]: (_, action) => action.payload,
});
