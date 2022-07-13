import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  addProduct,
  deleteProduct,
} from './products-operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
    isLoaded: false,
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.isLoaded = true
      state.productsList = [...payload];
    },
    [fetchProducts.pending]: (state) => {
     state.isLoaded= false;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      return (state = [...state, payload]);
    },

    [deleteProduct.fulfilled](state, action) {
    
      return state.filter(({ id }) => {
        return id !== action.meta.arg;
      });
    },
  },
});

export default productsSlice.reducer;
export const { addItem, deleteItem } = productsSlice.actions;