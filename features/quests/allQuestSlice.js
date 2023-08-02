import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { displayStatThunk, getAllQuestThunk } from './allQuestActions';

const intialFilterState = {
  search: '',
  searchStatus: 'all',
  searchType: 'all',
  sort: 'latest',
  sortType: ['latest', 'oldest', 'a-z', 'z-a'],
};

const initialState = {
  isLoading: false,
  quest: [],
  totalQuest: 0,
  totalPages: 1,
  page: 1,
  stats: {},
  monthlyQuestRegistration: [],
  ...intialFilterState,
};

export const getAllQuest = createAsyncThunk(
  'allJobs/getJobs',
  getAllQuestThunk
);

export const displayStats = createAsyncThunk(
  'allJobs/showStats',
  displayStatThunk
);

const allQuestSlice = createSlice({
  name: 'allQuest',
  initialState,
  reducers: {
    loadingDisplay: (state, tgl) => {
      state.isLoading = tgl;
    },
    changeHandler: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    resetHandler: (state) => {
      return { ...state, ...intialFilterState };
    },
    pageNavigation: (state, { payload }) => {
      state.page = payload;
    },
    clearQuestState: () => {
      return initialState;
    },
  },
  extraReducers: {
    [getAllQuest.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllQuest.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { jobs, numOfPages, totalJobs } = payload;
      state.quest = jobs;
      state.totalPages = numOfPages;
      state.totalQuest = totalJobs;
    },
    [getAllQuest.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload);
    },
    [displayStats.pending]: (state) => {
      state.isLoading = true;
    },
    [displayStats.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.stats = payload.defaultStats;
      state.monthlyQuestRegistration = payload.monthlyApplications;
    },
    [displayStats.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const {
  loadingDisplay,
  changeHandler,
  clearQuestState,
  resetHandler,
  pageNavigation,
} = allQuestSlice.actions;
export default allQuestSlice.reducer;
