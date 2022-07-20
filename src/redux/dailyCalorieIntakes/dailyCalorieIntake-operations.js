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
      //console.log(error.message);
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
      //console.log(error.message);
    }
  }
);

export const getUserDiet = createAsyncThunk(
  'calories/getUserDiet',
  async () => {
    try {
      const { data } = await axios.get('/users/current');
      if (!data.data.user) {
        return {
          dailyCalorieIntake: null,
          notRecommendedProducts: [],
          height: '',
          age: '',
          currentWeight: '',
          desiredWeight: '',
          bloodType: 1,
        };
      }
      return data.data.user;
    } catch (error) {
      return {
        dailyCalorieIntake: null,
        notRecommendedProducts: [],
        height: '',
        age: '',
        currentWeight: '',
        desiredWeight: '',
        bloodType: 1,
      };
    }
  }
);
