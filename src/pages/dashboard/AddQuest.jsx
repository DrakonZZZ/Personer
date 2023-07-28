import { FormSec } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { StyledInterface } from './Profile';
import { toast } from 'react-toastify';
import FormSelect from '../../components/FormSelect';
import { handleChange } from '../../../features/quests/questSlice';

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (!location || !position || !company) {
      toast('Please fill out all the fields');
      return;
    }
  };
  const inputHandler = (e) => {
    console.log(e.target.name, e.target.value);
    dispatch(handleChange(e.target.name, e.target.value));
  };

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
              onClick={() => console.log('clear')}
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
