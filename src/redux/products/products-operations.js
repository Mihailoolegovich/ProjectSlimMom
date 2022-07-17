import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
