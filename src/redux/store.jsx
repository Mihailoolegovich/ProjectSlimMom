import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from './user/userSlice';
import { authSlice } from './auth';
import productsSlice from './products/productsSlice';
import caloriesSlice from './dailyCalorieIntakes/dailyCalorieIntake-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: authSlice,
    user: persistReducer(userPersistConfig, userSlice),
    products: productsSlice,
    calories: caloriesSlice,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ],
});

setupListeners(store.dispatch);
export default store;
export const persistor = persistStore(store);
