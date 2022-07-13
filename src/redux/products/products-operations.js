import { createAsyncThunk } from '@reduxjs/toolkit';
//import axios from 'axios';

const products = [
  {
    id: 1,
    weight: 100,
    title: { ua: 'Appleplant' },
    calories: 353,
  },
  {
    id: 2,
    weight: 100,
    title: { ua: 'Poultry meat' },
    calories: 340,
  },
  {
    id: 3,
    weight: 100,
    title: { ua: 'Bread' },
    calories: 320,
  },
  {
    id: 4,
    weight: 100,
    title: { ua: 'Nut' },
    calories: 320,
  },
  {
    id: 5,
    weight: 100,
    title: { ua: 'Pork meat' },
    calories: 320,
  },
  {
    id: 6,
    weight: 100,
    title: { ua: 'Potato' },
    calories: 320,
  },
];

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (value, { rejectWithValue }) => {
    try {
      /*const { data } = await axios.get(`/products`, null, {params: value});*/

      return products;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addProduct = createAsyncThunk(
  'products/addProduct',
  async (product, { rejectWithValue }) => {
    try {
      /* const { data } = await axios.post(`/days/create`, product);
      return data;*/
      console.log(product);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      /*  const { data } = await axios.delete(`/days/user/product/${id}`);
      return data;*/
      console.log(id);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
