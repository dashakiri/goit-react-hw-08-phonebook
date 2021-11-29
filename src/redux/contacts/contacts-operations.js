import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from '../../services/contactsAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchContacts();
      return contacts;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const addNewContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const newContact = await addContacts({ name, number });
      return newContact;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const deleteOneContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      await deleteContacts(id);
      return id;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);
