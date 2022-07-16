import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDMwODQ1M2JhN2UyZjkyZjQzZDc5ZiIsImlhdCI6MTY1ODAwNTA4NiwiZXhwIjoxNjU4MDA4Njg2fQ.TC46QquEcU1M95JzxRzhbbSUGoyavSSBpQO8vaygKXU';

axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const getCurrentDay = createAsyncThunk(
  'products/getCurrentDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/days/user`, { date });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (value, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/products?query=${value}`);
      if (data.message) {
        return [];
      }
      return data;
    } catch (error) {
      console.log(rejectWithValue);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/days/create`, product);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async ({ id, date }, { rejectWithValue }) => {
    const dateObj = { date };

    try {
      const { data } = await axios.post(`/days/user/product/${id}`, dateObj);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
