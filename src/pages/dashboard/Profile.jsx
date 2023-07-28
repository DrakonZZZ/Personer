import { useDispatch, useSelector } from 'react-redux';
import { FormSec } from '../../components';
import { styled } from 'styled-components';
import { useState } from 'react';
import { updateUser } from '../../../features/users/userSlice';

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
    background: var(--primary-7);
  }
  .clear-btn:hover {
    background: var(--primary-6);
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
    lastName: userInfo?.lastName || '',
    location: userInfo?.location || '',
  });

  const { name, email, lastName, location } = userData;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !lastName || !location) {
      console.log('please fill out all fields');
      return;
    }
    dispatch(updateUser({ name, lastName, email, location }));
  };

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <StyledInterface>
      <form className="form" onSubmit={handleSubmit}>
        <h3>profile</h3>
        <div className="form-center">
          <FormSec
            type="text"
            name="name"
            value={userData.name}
            handleChange={handleChange}
          />
          <FormSec
            type="text"
            labelText="last name"
            name="lastName"
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormSec
            type="email"
            name="email"
            value={userData.email}
            handleChange={handleChange}
          />
          <FormSec
            type="text"
            name="location"
            value={userData.location}
            handleChange={handleChange}
          />
          <button type="submit" className="btn btn-block" disabled={isLoading}>
            {isLoading ? 'Please Wait...' : 'save changes'}
          </button>
        </div>
      </form>
    </StyledInterface>
  );
};

export default Profile;
