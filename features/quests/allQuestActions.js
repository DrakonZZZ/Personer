import endPoint from '../../utils/axios';
import { unauthorizedResponse } from '../users/userAction';

export const getAllQuestThunk = async (noparam, thunkPoint) => {
  const { search, searchStatus, searchType, sort, page } =
    thunkPoint.getState().allQuest;
  try {
    const res = await endPoint.get(
      `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}${
        search && `&search=${search}`
      }`
    );
    return res.data;
  } catch (error) {
    return unauthorizedResponse(error, thunkPoint);
  }
};

export const displayStatThunk = async (noparam, thunkPoint) => {
  try {
    const res = await endPoint.get('/jobs/stats');
    return res.data;
  } catch (error) {
    return unauthorizedResponse(error, thunkPoint);
  }
};
