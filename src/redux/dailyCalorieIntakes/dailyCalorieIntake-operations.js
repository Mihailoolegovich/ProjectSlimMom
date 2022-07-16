import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://weightbusters-api.herokuapp.com';

const dailyCalories = createAsyncThunk(
  'daily-calorie-intakes',
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

export default dailyCalories;
