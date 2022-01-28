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
      const { data } = await fetchContacts();
      return data.result;
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);

export const addNewContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, email, phone }, { rejectWithValue }) => {
    try {
      const newContact = await addContacts({ name, email, phone });
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

const contactsOperations = {
  fetchAllContacts,
  addNewContact,
  deleteOneContact,
};

export default contactsOperations;
