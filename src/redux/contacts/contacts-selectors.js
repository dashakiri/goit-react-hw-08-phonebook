import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.phoneBook.contacts;
export const getFilter = state => state.phoneBook.filter;
export const getLoading = state => state.phoneBook.loading;
export const getError = state => state.phoneBook.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
