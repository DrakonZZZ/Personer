import endPoint from '../../utils/axios';

export const getAllQuestThunk = async (noparam, thunkPoint) => {
  const { search, searchStatus, searchType, sortType, page } =
    thunkPoint.getState().allQuest;
  try {
    const res = await endPoint.get(
      `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sortType}&page=${page}${
        search && `&search=${search}`
      }`
    );
    return res.data;
  } catch (error) {
    return thunkPoint.rejectWithValue(error.response.data.msg);
  }
};

export const displayStatThunk = async (noparam, thunkPoint) => {
  try {
    const res = await endPoint.get('/jobs/stats');
    return res.data;
  } catch (error) {
    return thunkPoint.rejectWithValue(error.response.data.msg);
  }
};
