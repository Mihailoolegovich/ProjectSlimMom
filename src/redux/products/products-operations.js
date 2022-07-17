import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZDMwODQ1M2JhN2UyZjkyZjQzZDc5ZiIsImlhdCI6MTY1ODAxNDcxMSwiZXhwIjoxNjU4MDE4MzExfQ.j9OulEy5Xog7API5NxJ54ujmMtF4dMMMMNpVC5oIjMY';
*/
//axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

export const getCurrentDay = createAsyncThunk(
  'products/getCurrentDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/days/user`, { date });

      return data.items;
    } catch (error) {
      return [];
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
    } catch (error) {}
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/days/create`, product);
      if (data.message) {
        return [];
      }
      return data.items;
    } catch (error) {}
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async ({ id, date }, { rejectWithValue }) => {
    const dateObj = { date };

    try {
      const { data } = await axios.post(`/days/user/product/${id}`, dateObj);
      return data;
    } catch (error) {}
  }
);
