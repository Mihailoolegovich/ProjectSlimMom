import { createSlice } from '@reduxjs/toolkit';
import { dailyCaloriesPrivate, dailyCaloriesPublic } from './dailyCalorieIntake-operations';

const initialState = {
  calories: null,
  notRecommendProd: [],
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  extraReducers: {
    [dailyCaloriesPrivate.fulfilled]: (state, action) => {
      state.calories = action.payload.data.user.dailyCalorieIntake;
      state.notRecommendProd = [
        ...action.payload.data.user.notRecommendedProducts,
      ];
      // console.log(action);
      console.log(state);
    },
    [dailyCaloriesPublic.fulfilled]: (state, action) => {
      state.calories = action.payload.dailyCalorieIntake;
      state.notRecommendProd = [
        ...action.payload.notRecommendedProducts,
      ];
      // console.log(action);
      console.log(state);
    },
  },
});

export default caloriesSlice.reducer;
