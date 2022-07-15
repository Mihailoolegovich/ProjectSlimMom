import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2YwYzg1NWEyZTc2YjFhN2Q4ZDI1ZiIsImlhdCI6MTY1NzgzMjQ1OSwiZXhwIjoxNjU3ODM2MDU5fQ._ZSUYpGFtNpDPsmXYImZUfK8zWOulT3tBG3JCaPUzTk';

axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;
*/
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
      return data;
    } catch (error) {
      return rejectWithValue(error);
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
