import endPoint from '../../utils/axios';
import { logout } from './userSlice';

export const registerUserThunk = async (user, thunkPoint) => {
  try {
    const res = await endPoint.post('/auth/register', user);
    return res.data;
  } catch (error) {
    return thunkPoint.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkPoint) => {
  try {
    const res = await endPoint.post('/auth/login', user);
    return res.data;
  } catch (error) {
    return thunkPoint.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkPoint) => {
  try {
    const res = await endPoint.patch('/auth/updateUser', user);
    return res.data;
  } catch (error) {
    if (error.response.status == 401) {
      thunkPoint.dispatch(logout());
    }
    return thunkPoint.rejectWithValue(error.response.data.msg);
  }
};
