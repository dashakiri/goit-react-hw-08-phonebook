import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, { payload }) {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled]({ user, token, isLoggedIn }, { payload }) {
      user = payload.user;
      token = payload.token;
      isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled]({ user, token, isLoggedIn }) {
      user = { name: null, email: null };
      token = null;
      isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending]({ isRefreshing }) {
      isRefreshing = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](
      { user, isLoggedIn, isRefreshing },
      { payload },
    ) {
      user = payload;
      isLoggedIn = true;
      isRefreshing = false;
    },
    [authOperations.fetchCurrentUser.rejected]({ isRefreshing }) {
      isRefreshing = false;
    },
  },
});

export default authSlice.reducer;
