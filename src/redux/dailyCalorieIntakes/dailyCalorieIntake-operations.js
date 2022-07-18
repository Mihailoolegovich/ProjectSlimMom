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
      return data;
    } catch (error) {
      console.log(error.message);
    }
  }
);

export const dailyCaloriesPublic = createAsyncThunk(
  'calories/dailyCaloriesPublic',
  async credentials => {
    try {
      const { data } = await axios.post(
        '/daily-calorie-intakes',
        credentials
      );

      return data.data.user;
    } catch (error) {
      console.log(error.message);
    }
  }
);


