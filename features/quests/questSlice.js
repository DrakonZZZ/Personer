import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getDataFromSession } from '../../utils/session';
import { addQuestThunk, deleteQuestThunk, editQuestThunk } from './questAction';

import { toast } from 'react-toastify';

const initialState = {
  jobTypeOptions: ['internship', 'part-time', 'full-time', 'remote'],
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
  jobType: 'full-time',
  position: '',
  company: '',
  jobLocation: '',
  editQuestId: '',
  isEditing: false,
  isLoading: false,
};

export const addQuest = createAsyncThunk('job/createJob', addQuestThunk);

export const deleteQuest = createAsyncThunk('job/deleteJob', deleteQuestThunk);

export const editQuestData = createAsyncThunk('job/editJob', editQuestThunk);

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
    editQuest: (state, { payload }) => {
      return { ...state, isEditing: true, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addQuest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addQuest.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Quest Created!');
      })
      .addCase(addQuest.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast(payload);
      })
      .addCase(deleteQuest.fulfilled, () => {
        toast.success('Quest deleted');
      })
      .addCase(deleteQuest.rejected, (state, { payload }) => {
        toast(payload);
      })
      .addCase(editQuestData.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editQuestData.fulfilled, (state) => {
        state.isLoading = false;
        toast.success('Quest Updated!');
      })
      .addCase(editQuestData.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export const { changeStateValue, clearStateValue, editQuest } =
  questSlice.actions;
export default questSlice.reducer;
