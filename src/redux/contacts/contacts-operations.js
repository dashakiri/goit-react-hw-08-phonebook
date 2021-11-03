import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  deleteContacts,
} from '../../services/contactsAPI';

export const fetchAllContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await fetchContacts();
    return contacts;
  },
);

export const addNewContact = createAsyncThunk(
  'contacts/addContacts',
  async ({ name, number }) => {
    const newContact = await addContacts({ name, number });
    return newContact;
  },
);

export const deleteOneContact = createAsyncThunk(
  'contacts/deleteContacts',
  async id => {
    await deleteContacts(id);
    return id;
  },
);

// export const fetchAllContacts = () => async dispatch => {
//     dispatch(fetchAPI.fetchContactsRequest());

//     try {
//         const contacts = await fetchContacts();
//         dispatch(fetchAPI.fetchContactsSuccess(contacts));
//     } catch(error) {
//         dispatch(fetchAPI.fetchContactsError(error));
//     };
// };

// export const addNewContact = ({ name, number}) => async dispatch => {
//     dispatch(fetchAPI.addContactRequest());

//     try {
//         const newContact = await addContacts(name, number);
//         dispatch(fetchAPI.addContactSuccess(newContact));
//     } catch(error) {
//         dispatch(fetchAPI.addContactError(error));
//     };
// };

// export const deleteOneContact = ({id}) => async dispatch => {
//     dispatch(fetchAPI.deleteContactRequest());

//     try {
//         const contactToDelete = await deleteContacts(id);
//         dispatch(fetchAPI.deleteContactSuccess(contactToDelete));
//     } catch(error) {
//         dispatch(fetchAPI.deleteContactError(error));
//     };
// };
