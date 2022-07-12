import axios from 'axios';
import apiService from '../../services/service-api';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { authSlice } from '.';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://health-base-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/auth/signup', credentials);
    token.set(data.token);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

const logIn = credentials => async dispatch => {
  dispatch(authSlice.actions.loginRequest());

  try {
    const { data } = await apiService.logInUser(credentials);
    token.set(data.user.token);
    dispatch(authSlice.actions.loginSuccess(data));
  } catch (error) {
    const err = error?.response?.data?.message || error?.response?.data?.status;
    toast.error(err);
    dispatch(authSlice.actions.loginError(err));
  }
};

const logOut = () => async dispatch => {
  dispatch(authSlice.actions.logoutRequest());

  try {
    await apiService.logOutUser();
    token.unset();
    dispatch(authSlice.actions.logoutSuccess());
    localStorage.setItem('user', JSON.stringify(null));
  } catch (error) {
    const err = error?.response?.data?.message || error?.response?.data?.status;
    toast.error(err);
    dispatch(authSlice.actions.logoutError(err));
  }
};

const authOperations = {
  register,
  logIn,
  logOut,
};
export default authOperations;
