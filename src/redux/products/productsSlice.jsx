import { createSlice } from '@reduxjs/toolkit';
import {
  fetchProducts,
  addProduct,
  deleteProduct,
  getCurrentDay
} from './products-operations';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productsList: [],
    isLoading: false,
    consumedProd: {},
  },
  extraReducers: {
    [getCurrentDay.fulfilled]: (state, { payload }) => {
      state.consumedProd = payload;
    },
    [fetchProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.productsList = [...payload];
    },
    [fetchProducts.pending]: (state) => {
     state.isLoading= true;
    },
    [addProduct.fulfilled]: (state, { payload }) => {
      state.consumedProd = payload;
    },

    [deleteProduct.fulfilled](state, action) {
    
      state.consumedProd.items = state.consumedProd.items.filter(({ id }) => {
        return id !== action.meta.arg.id;
      });
    },
  },
});

export default productsSlice.reducer;
export const { addItem, deleteItem } = productsSlice.actions;