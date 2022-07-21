import { createSlice } from '@reduxjs/toolkit';
import {
  dailyCaloriesPrivate,
  dailyCaloriesPublic,
  getUserDiet,
} from './dailyCalorieIntake-operations';

const initialState = {
  dailyCalorieIntake: null,
  notRecommendedProducts: [],
  height: '',
  age: '',
  currentWeight: '',
  desiredWeight: '',
  bloodType: 1,
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  reducers: {
    clearStorage: (state, action) => {
      return (state = initialState);
    },
  },
  extraReducers: {
    [dailyCaloriesPrivate.fulfilled]: (state, { payload }) => {
      return (state = { ...payload });
    },
    [dailyCaloriesPublic.fulfilled]: (state, { payload }) => {
      return (state = { ...payload });
    },
    [getUserDiet.fulfilled]: (state, { payload }) => {
      return (state = { ...payload });
    },
  },
});

export default caloriesSlice.reducer;
export const { clearStorage } = caloriesSlice.actions;
