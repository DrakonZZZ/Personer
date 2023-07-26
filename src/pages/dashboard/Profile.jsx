import { useDispatch, useSelector } from 'react-redux';
import { FormSec } from '../../components';
import { styled } from 'styled-components';
import { useState } from 'react';

export const StyledInterface = styled.main`
  border: 4px solid var(--primary-2);
  width: 100%;
  background: var(--black);
  padding: 3rem 2rem 4rem;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    border-radius: 8px;
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
    .btn {
      border-radius: 5px;
      margin-bottom: 0;
    }
  }
`;

const Profile = () => {
  const { userInfo, isLoading } = useSelector((store) => {
    return store.user;
  });

  const dispatch = useDispatch();

  const [userData, setUserdata] = useState({
    name: userInfo?.name || '',
    email: userInfo?.email || '',
    last: userInfo?.lastName || '',
    loc: userInfo?.location || '',
  });

  const { name, email, last, loc } = userData;

  const submitHandler = (e) => {
    e.preventdefault();
    if (!name || !email || !last || !loc) {
      console.log('please fill out all fields');
      return;
    }
  };
  const changeHandler = (e) => {
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <StyledInterface>
      <form onSubmit={submitHandler} className="form">
        <h3>Profile</h3>
        <div className="form-center">
          <FormSec
            type="text"
            name="name"
            value={name}
            handleChange={changeHandler}
          />
          <FormSec
            type="text"
            lableText="last name"
            name="last"
            value={last}
            handleChange={changeHandler}
          />
          <FormSec
            type="text"
            name="location"
            value={loc}
            handleChange={changeHandler}
          />
          <FormSec
            type="email"
            name="email"
            value={email}
            handleChange={changeHandler}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Updating...' : 'Update'}
          </button>
        </div>
      </form>
    </StyledInterface>
  );
};

export default Profile;
