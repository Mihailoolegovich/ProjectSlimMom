import { createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      /*const { data } = await axios.get(`/products`);
      return data;*/
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      /* const { data } = await axios.post(`/products`, product);
      return data;*/
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      /*  const { data } = await axios.delete(`/products/${id}`);
      return data;*/
      console.log(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
