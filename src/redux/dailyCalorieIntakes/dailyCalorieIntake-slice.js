import { createSlice } from '@reduxjs/toolkit';
import dailyCalories from './dailyCalorieIntake-operations';

const initialState = {
  calories: null,
  notRecommendProd: [],
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  extraReducers: {
  
    [dailyCalories.fulfilled]: (state, action) => {
      state.calories = action.payload.data.user.dailyCalorieIntake;
      state.notRecommendProd = [
        ...action.payload.data.user.notRecommendedProducts,
      ];
      // console.log(action);
      console.log(state);
    },
  },
});

export default caloriesSlice.reducer;
