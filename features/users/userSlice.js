import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getDataFromSession,
  addDataToSession,
  clearFromSession,
} from '../../utils/session';
import { toast } from 'react-toastify';
import {
  loginUserThunk,
  registerUserThunk,
  updateUserThunk,
  resetStoreDataThunk,
} from './userAction';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  userInfo: getDataFromSession(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  registerUserThunk
);

export const loginUser = createAsyncThunk('user/loginUser', loginUserThunk);

export const updateUser = createAsyncThunk('user/updateUser', updateUserThunk);

export const storeReset = createAsyncThunk(
  'user/clearStore',
  resetStoreDataThunk
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logout: (state, { payload }) => {
      state.userInfo = null;
      state.isSidebarOpen = false;
      if (payload) {
        toast(payload);
      }
      clearFromSession();
    },
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.userInfo = user;
      addDataToSession(user);
      toast.success(`Hello there, ${user.name}`);
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload);
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.userInfo = user;
      addDataToSession(user);
      toast.success(`Welcome back 🙂, ${user.name}`);
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload);
    },
    [updateUser.pending]: (state) => {
      state.isLoading = true;
    },
    [updateUser.fulfilled]: (state, { payload }) => {
      const { user } = payload;
      state.isLoading = false;
      state.user = user;

      addDataToSession(user);
      toast.success('Your Profile has been updated!');
    },
    [updateUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      toast(payload);
    },
    [storeReset.rejected]: () => {
      toast('Something went wrong');
    },
  },
});

export const { toggleSidebar, logout } = userSlice.actions;
export default userSlice.reducer;
