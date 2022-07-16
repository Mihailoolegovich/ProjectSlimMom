import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
};

const userSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {},
});

export default userSlice.reducer;
