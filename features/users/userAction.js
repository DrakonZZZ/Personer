import endPoint from '../../utils/axios';
import { logout, storeReset } from './userSlice';
import { clearQuestState } from '../quests/allQuestSlice';
import { clearStateValue } from '../quests/questSlice';

export const registerUserThunk = async (user, thunkPoint) => {
  try {
    const res = await endPoint.post('/auth/register', user);
    return res.data;
  } catch (error) {
    return unauthorizedResponse(error, thunkPoint);
  }
};

export const loginUserThunk = async (user, thunkPoint) => {
  try {
    const res = await endPoint.post('/auth/login', user);
    return res.data;
  } catch (error) {
    return unauthorizedResponse(error, thunkPoint);
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
    return unauthorizedResponse(error, thunkPoint);
  }
};

export const resetStoreDataThunk = async (msg, thunkPoint) => {
  try {
    thunkPoint.dispatch(logout(msg));
    thunkPoint.dispatch(clearQuestState());
    thunkPoint.dispatch(clearStateValue());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};

export const unauthorizedResponse = (error, thunkPoint) => {
  if (error.response.status === 401) {
    thunkPoint.dispatch(storeReset());
    return thunkPoint.rejectWithValue(
      'You are not authorized to use this account'
    );
  }
  return thunkPoint.rejectWithValue(error.response.data.msg);
};
