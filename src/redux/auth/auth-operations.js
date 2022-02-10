import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

axios.defaults.baseURL = 'https://floating-atoll-23449.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async ({ email, password }) => {
    try {
      const { data } = await axios.post('/api/users/signup', {
        email,
        password,
      });
      token.set(data.data.token);
      return data.data;
    } catch (error) {
      console.error(error.message);
    }
  },
);

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('api/users/login', credentials);
    token.set(data.data.token);
    return data.data;
  } catch (error) {
    console.error(error.message);
  }
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/api/users/logout');
    token.unset();
  } catch (error) {
    console.error(error.message);
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const data = await axios.get('/api/users').then(res => res.data);
      return data;
    } catch (error) {
      console.error(error.message);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};

export default authOperations;
