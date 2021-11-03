import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contacts, filter, loading, error } from './contacts/contacts-reducers';

const rootReducer = combineReducers({
  contacts,
  filter,
  loading,
  error,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
