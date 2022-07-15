import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialUserState = {
  user: { name: null, email: null },
  token: null,
  // error: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  // isLoading: false,
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
      // console.log(action);
      console.log(state);
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
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
