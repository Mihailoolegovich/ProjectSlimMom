import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { toast } from 'react-toastify';

export const getCurrentDay = createAsyncThunk(
  'products/getCurrentDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/days/user`, { date });
      if (data.message) {
        toast.info(data.message);
        return [];
      }
      return data.items;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Pleace, sign in');
        return [];
      }
      toast.error(error.message);
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
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Pleace, sign in');
        return [];
      }
      toast.error(error.message);
      return [];
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/days/create`, product);
      if (data.message) {
        toast.error(data.message);
        return [];
      }
      toast.success('Product successfully added');
      return data.items;
    } catch (error) {
      if (error.response.status === 401) {
        toast.error('Pleace, sign in');
        return;
      }
      toast.error(error.response.data.message);
      return;
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async ({ id, date }, { rejectWithValue }) => {
    const dateObj = { date };

    try {
      const { data } = await axios.post(`/days/user/product/${id}`, dateObj);
      toast.success('Product deleted');
      return data;
    } catch (error) {
      error.response.status === 401 && toast.error('Pleace, sign in');
      toast.error(error.message);
    }
  }
);
