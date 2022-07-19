import { createSlice } from '@reduxjs/toolkit';
import {
  dailyCaloriesPrivate,
  dailyCaloriesPublic,
  getUserDiet,
} from './dailyCalorieIntake-operations';

const initialState = {
  dailyCalorieIntake: null,
  notRecommendedProducts: [],
  height: null,
  age: null,
  currentWeight: null,
  desiredWeight: null,
  bloodType: null,
};

const caloriesSlice = createSlice({
  name: 'calories',
  initialState,
  extraReducers: {
    [dailyCaloriesPrivate.fulfilled]: (state, { payload }) => {
      state.dailyCalorieIntake = payload.dailyCalorieIntake;
      state.notRecommendedProducts = [...payload.notRecommendedProducts];
      // console.log(action);
      //console.log(state);
    },
    [dailyCaloriesPublic.fulfilled]: (state, { payload }) => {
      state.dailyCalorieIntake = payload.dailyCalorieIntake;
      state.notRecommendedProducts = [...payload.notRecommendedProducts];
      // console.log(action);
      //console.log(state);
    },
    [getUserDiet.fulfilled]: (state, { payload }) => {
      console.log(payload.data.user);
      return (state = { ...payload.data.user });
      // console.log(action);
      //console.log(state);
    },
  },
});

export default caloriesSlice.reducer;
