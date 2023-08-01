import { FormSec, FormSelect } from '.';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import {
  changeHandler,
  resetHandler,
} from '../../features/quests/allQuestSlice';

const StyledSearchContainer = styled.section`
  .form {
    width: 100%;
    max-width: 100%;
  }
  .form-input,
  .form-select,
  .btn-block {
    height: 35px;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    grid-template-columns: 1fr;
    column-gap: 2rem;
    row-gap: 0.5rem;
  }
  h4.line {
    position: relative;
    z-index: 1;
    font-weight: 600;
    text-align: center;
    color: var(--primary-6);
    :before {
      border-top: 3px solid var(--primary-6);
      content: '';
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      width: 95%;
      z-index: -1;
    }

    span {
      background: var(--primary-3);
      padding: 0 15px;
    }
  }
  .btn {
    margin-bottom: 0;
    border-radius: var(--borderRadius);
  }
  .btn-block {
    align-self: end;
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .btn-block {
      margin-top: 0;
    }
  }
`;

const SearchContainer = () => {
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.quest);
  const { search, searchStatus, searchType, sort, sortType, isloading } =
    useSelector((store) => store.allQuest);
  const dispatch = useDispatch();

  const searchHandler = (e) => {
    dispatch(changeHandler({ name: e.target.name, value: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetHandler());
  };
  return (
    <StyledSearchContainer>
      <h4 className="line">
        <span>Search</span>
      </h4>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-center">
          <FormSec
            type="text"
            name="search"
            value={search}
            handleChange={searchHandler}
          />
          <FormSelect
            labelText="type"
            name="searchType"
            value={searchType}
            inputHandler={searchHandler}
            options={['all', ...jobTypeOptions]}
          />
          <FormSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            inputHandler={searchHandler}
            options={['all', ...statusOptions]}
          />
          <FormSelect
            labelText="sort"
            name="sort"
            value={sort}
            inputHandler={searchHandler}
            options={sortType}
          />
          <button type="submit" className="btn btn-block" disabled={isloading}>
            Reset
          </button>
        </div>
      </form>
    </StyledSearchContainer>
  );
};

export default SearchContainer;
