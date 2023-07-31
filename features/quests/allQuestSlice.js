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

const allQuestSlice = createSlice({
  name: 'allQUest',
  initialState,
});

export default allQuestSlice.reducer;
