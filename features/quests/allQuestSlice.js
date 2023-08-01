import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endPoint from '../../utils/axios';
import { toast } from 'react-toastify';

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
  stats: {},
  monthlyQuestRegistration: [],
  ...intialFilterState,
};

export const getAllQuest = createAsyncThunk(
  'allJobs/getJobs',
  async (noparam, thunkPoint) => {
    try {
      const res = await endPoint.get('/jobs');

      return res.data;
    } catch (error) {
      return thunkPoint.rejectWithValue(error.response.data.msg);
    }
  }
);

export const displayStats = createAsyncThunk(
  'allJobs/showStats',
  async (noparam, thunkPoint) => {
    try {
      const res = await endPoint.get('/jobs/stats');
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkPoint.rejectWithValue(error.response.data.msg);
    }
  }
);

const allQuestSlice = createSlice({
  name: 'allQuest',
  initialState,
  reducers: {
    loadingDisplay: (state, tgl) => {
      state.isLoading = tgl;
    },
  },
  extraReducers: {
    [getAllQuest.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllQuest.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      const { jobs } = payload;
      state.quest = jobs;
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

export const { loadingDisplay } = allQuestSlice.actions;
export default allQuestSlice.reducer;
