import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/userSlice';
import questSlice from '../features/quests/questSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    quest: questSlice,
  },
});
