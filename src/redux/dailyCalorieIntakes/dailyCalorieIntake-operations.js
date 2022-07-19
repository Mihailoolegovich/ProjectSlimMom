import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://weightbusters-api.herokuapp.com';

export const dailyCaloriesPrivate = createAsyncThunk(
  '/dailyCaloriesPrivate',
  async credentials => {
    try {
      const { data } = await axios.post(
        '/daily-calorie-intakes/private',
        credentials
      );
      return data.data.user;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const dailyCaloriesPublic = createAsyncThunk(
  'calories/dailyCaloriesPublic',
  async credentials => {
    try {
      const { data } = await axios.post('/daily-calorie-intakes', credentials);

      return data.data.user;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const getUserDiet = createAsyncThunk(
  'calories/getUserDiet',
  async () => {
    try {
      const { data } = await axios.get('/___');
      if (!data.data) {
        return { dailyCalorieIntake: null, notRecommendedProducts: []};
      }
      return data.data.user;
    } catch (error) {
      console.log(error.message);
    }
  }
);
