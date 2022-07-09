import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  extraReducers: {},
});

export default productsSlice.reducer;
