import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  error: null,
  isLoggedIn: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialUserState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user.name = action.payload.data.user.name;
      state.user.email = action.payload.data.user.email;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      console.log(action);
      console.log(state);
    },
  },
  // reducers: {
  //   registerRequest: state => {
  //     state.isLoading = true;
  //   },
  //   registerSuccess: (state, { payload }) => {
  //     state.user = payload.user;
  //     state.token = payload.user.token;
  //     state.isLoading = false;
  //     state.isLoggedOn = true;
  //   },
  //   registerError: (state, { payload }) => {
  //     state.error = payload.message;
  //     state.isLoading = false;
  //     state.isLoggedOn = false;
  //   },
  //   loginRequest: state => {
  //     state.isLoading = true;
  //   },
  //   loginSuccess: (state, { payload }) => {
  //     state.user = payload.user;
  //     state.token = payload.user.token;
  //     state.isLoading = false;
  //     state.isLoggedOn = true;
  //   },
  //   loginError: (state, { payload }) => {
  //     state.error = payload.message;
  //     state.isLoading = false;
  //     state.isLoggedOn = false;
  //   },
  //   logoutRequest: state => {
  //     state.isLoading = true;
  //   },
  //   logoutSuccess: state => {
  //     state.user = null;
  //     state.token = null;
  //     state.isLoading = false;
  //     state.isLoggedOn = false;
  //   },
  //   logoutError: (state, { payload }) => {
  //     state.error = payload?.message;
  //     state.isLoading = false;
  //   },
  //   getCurrentUserRequest: (state, { payload }) => {
  //     state.isLoading = true;
  //   },
  //   getCurrentUserSuccess: (state, { payload }) => {
  //     state.user = payload.user;
  //     state.isLoading = false;
  //     state.isLoggedOn = true;
  //   },
  //   getCurrentUserError: (state, { payload }) => {
  //     state.error = payload;
  //     state.isLoading = false;
  //     state.isLoggedOn = false;
  //   },
  // },
});

// eslint-disable-next-line
export default authSlice.reducer;
