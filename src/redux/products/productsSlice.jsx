import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  addProduct,
  deleteProduct,
} from './products-operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  extraReducers: {
    [fetchProducts.fulfilled]: (state, { payload }) => {
      return (state = [...payload]);
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