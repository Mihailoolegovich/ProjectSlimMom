import { createReducer } from '@reduxjs/toolkit';
import { setLoading } from './loaderAction';

export const loaderReducer = createReducer(false, {
  [setLoading]: state => !state,
});
