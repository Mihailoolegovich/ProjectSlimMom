import { createSlice } from '@reduxjs/toolkit';
import {
  dailyCaloriesPrivate,
  dailyCaloriesPublic,
} from './dailyCalorieIntake-operations';

const initialState = {
  calories: null,
  notRecommendProd: [],
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  extraReducers: {
    [dailyCaloriesPrivate.fulfilled]: (state, { payload }) => {
      state.calories = payload.dailyCalorieIntake;
      state.notRecommendProd = [...payload.notRecommendedProducts];
      // console.log(action);
      //console.log(state);
    },
    [dailyCaloriesPublic.fulfilled]: (state, { payload }) => {
      state.calories = payload.dailyCalorieIntake;
      state.notRecommendProd = [...payload.notRecommendedProducts];
      // console.log(action);
      //console.log(state);
    },
  },
});

export default caloriesSlice.reducer;
