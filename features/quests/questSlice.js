import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endPoint from '../../utils/axios';
import { getDataFromSession } from '../../utils/session';
import { logout } from '../users/userSlice';
import { toast } from 'react-toastify';

const initialState = {
  jobTypeOptions: ['internship', 'part-time', 'full-time', 'remote'],
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  jobType: 'full-time',
  position: '',
  company: '',
  jobLocation: '',
  editJobId: '',
  isEditing: false,
  isLoading: false,
};

export const addQuest = createAsyncThunk(
  'job/createJob',
  async (quest, thunkPoint) => {
    try {
      const res = await endPoint.post('/jobs', quest, {
        headers: {
          Authorization: `Bearer ${thunkPoint.getState().user.userInfo.token}`,
        },
      });
      thunkPoint.dispatch(clearStateValue);
      return res.data;
    } catch (error) {
      if (error.response.status === 401) {
        thunkPoint.dispatch(logout());
        return thunkPoint.rejectWithValue(
          'You are Unauthorized to use this account'
        );
      }
      thunkPoint.rejectWithValue(error.response.date.msg);
    }
  }
);

const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {
    changeStateValue: (state, { payload }) => {
      console.log();
      const { name, value } = payload;
      state[name] = value;
    },
    clearStateValue: () => {
      return {
        ...initialState,
        jobLocation: getDataFromSession()?.location || '',
      };
    },
  },
  extraReducers: {
    [addQuest.pending]: (state) => {
      state.isLoading = true;
    },
    [addQuest.fulfilled]: (state) => {
      console.log('working');
      state.isLoading = false;
      toast.success('Quest Created!');
    },
    [addQuest.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast.error(payload);
    },
  },
});

export const { changeStateValue, clearStateValue } = questSlice.actions;
export default questSlice.reducer;
