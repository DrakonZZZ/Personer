import endPoint from '../../utils/axios';
import { logout } from '../users/userSlice';
import { loadingDisplay, getAllQuest } from './allQuestSlice';
import { clearStateValue } from './questSlice';

export const addQuestThunk = async (quest, thunkPoint) => {
  try {
    const res = await endPoint.post('/jobs', quest);
    thunkPoint.dispatch(clearStateValue());
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
};

export const deleteQuestThunk = async (jobId, thunkPoint) => {
  thunkPoint.dispatch(loadingDisplay(true));
  try {
    const res = await endPoint.delete(`/jobs/${jobId}`);
    thunkPoint.dispatch(getAllQuest());
    return res.data;
  } catch (error) {
    thunkPoint.dispatch(loadingDisplay(false));
    thunkPoint.rejectWithValue(error.response.data.msg);
  }
};

export const editQuestThunk = async ({ jobId, job }, thunkPoint) => {
  try {
    const res = await endPoint.patch(`/jobs/${jobId}`, job);
    thunkPoint.dispatch(clearStateValue());
    return res.data;
  } catch (error) {
    thunkPoint.rejectWithValue(error.response.data.msg);
  }
};
