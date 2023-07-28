import { FormSec } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { StyledInterface } from './Profile';
import { toast } from 'react-toastify';
import FormSelect from '../../components/FormSelect';
import {
  changeStateValue,
  clearStateValue,
  addQuest,
} from '../../../features/quests/questSlice';
import { useEffect } from 'react';

const AddQuest = () => {
  const {
    position,
    company,
    jobLocation,
    jobType,
    status,
    jobTypeOptions,
    statusOptions,
    editJobId,
    isEditing,
    isLoading,
  } = useSelector((store) => store.quest);

  const dispatch = useDispatch();

  const { userInfo } = useSelector((store) => store.user);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!location || !position || !company) {
      toast('Please fill out all the fields');
      return;
    }
    dispatch(addQuest({ position, company, jobLocation, jobType, status }));
  };

  const inputHandler = (e) => {
    dispatch(changeStateValue({ name: e.target.name, value: e.target.value }));
  };

  useEffect(() => {
    dispatch(
      changeStateValue({
        name: 'jobLocation',
        value: userInfo.location,
      })
    );
  }, []);
  return (
    <StyledInterface>
      <form className="form" onSubmit={submitHandler}>
        <h3>{isEditing ? 'Edit Quest' : 'Add Quest'}</h3>
        <div className="form-center">
          <FormSec
            type="text"
            name="position"
            value={position}
            handleChange={inputHandler}
          />
          <FormSec
            type="text"
            lableText="Guild"
            name="company"
            value={company}
            handleChange={inputHandler}
          />
          <FormSec
            type="text"
            lableText="Quest location"
            name="jobLocation"
            value={jobLocation}
            handleChange={inputHandler}
          />{' '}
          <FormSelect
            name="jobType"
            labelText="Quest Type"
            value={jobType}
            inputHandler={inputHandler}
            options={jobTypeOptions}
          />
          <FormSelect
            name="status"
            value={status}
            inputHandler={inputHandler}
            options={statusOptions}
          />
          <div className="btn-container" style={{ marginTop: '1.3rem' }}>
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearStateValue())}
            >
              Clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </StyledInterface>
  );
};

export default AddQuest;
