import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
/*
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyY2YwYzg1NWEyZTc2YjFhN2Q4ZDI1ZiIsImlhdCI6MTY1Nzg5MzU1OSwiZXhwIjoxNjU3ODk3MTU5fQ.wEokYMHoajdeNVL3120LqtGfHfUgbb9gN85XaCYHGlA';

axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;*/

export const getCurrentDay = createAsyncThunk(
  'products/getCurrentDay',
  async (date, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(`/days/user`, { date });
      console.log(data);
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
        console.log(data.message);
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
