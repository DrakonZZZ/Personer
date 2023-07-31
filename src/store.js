import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../features/users/userSlice';
import questSlice from '../features/quests/questSlice';
import allQuestSlice from '../features/quests/allQuestSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    quest: questSlice,
    allQuest: allQuestSlice,
  },
});
