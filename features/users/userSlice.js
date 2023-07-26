import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import endPoint from '../../utils/axios';
import {
  getDataFromSession,
  addDataToSession,
  clearFromSession,
} from '../../utils/session';
import { toast } from 'react-toastify';

const initialState = {
  isLoading: false,
  isSidebarOpen: false,
  userInfo: getDataFromSession(),
};

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (user, thunkPoint) => {
    try {
      const res = await endPoint.post('/auth/register', user);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return thunkPoint.rejectWithValue(error.response.data.msg);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (user, thunkPoint) => {
    try {
      const res = await endPoint.post('/auth/login', user);
      return res.data;
    } catch (error) {
      return thunkPoint.rejectWithValue(error.response.data.msg);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    logout: (state) => {
      state.userInfo = null;
      clearFromSession();
      state.isSidebarOpen = false;
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
  },
});

export const { toggleSidebar, logout } = userSlice.actions;
export default userSlice.reducer;
