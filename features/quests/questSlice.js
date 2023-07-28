import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endPoint from '../../utils/axios';
import { getDataFromSession } from '../../utils/session';

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

const questSlice = createSlice({
  name: 'quest',
  initialState,
  handleChange: (state, { payload }) => {
    const { name, value } = payload;
    state[name] = value;
  },
});

export const { handleChange } = questSlice.actions;
export default questSlice.reducer;
