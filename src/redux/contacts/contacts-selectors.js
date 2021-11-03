import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;
export const getLoading = state => state.loading;
export const getError = state => state.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    console.log(contacts);
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
