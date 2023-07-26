import { useState, useEffect } from 'react';
import { Logo, Footer, FormSec } from '../components';
import { styled } from 'styled-components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../../features/users/userSlice';
import { useNavigate } from 'react-router-dom';

const StyledRegister = styled.main`
  background-color: #fefe22;
  min-height: 100vh;
  position: relative;

  .page {
    min-height: calc(99vh - 6vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      height: 100px;
      display: block;
      margin: 0 auto;
    }
    h3 {
      text-align: center;
      font-weight: 600;
    }
    form {
      border-top: 6px solid var(--primary-4);
      margin-bottom: 1rem;
    }
    label {
      font-size: 1.1rem;
    }
  }

  .register {
    width: 100%;
    font-size: 1rem;
    color: #4e4e4e;
    text-align: center;
  }

  .member-btn {
    background-color: transparent;
    border: none;
    color: var(--primary-4);
    cursor: pointer;
  }

  .btn {
    margin-top: 1rem;
  }

  @media (min-width: 992px) {
    .nav-wrap {
      background-color: #fefe22;
    }
    .page {
      padding: 0;
    }
    .info {
    }
  }
`;

const initialState = {
  name: '',
  email: '',
  password: '',
  activeMember: false,
};

const Register = () => {
  const [value, setValue] = useState(initialState);

  const { userInfo, isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const registeredUser = () => {
    setValue({ ...value, activeMember: !value.activeMember, name: '' });
  };

  const navigator = useNavigate();

  useEffect(() => {
    if (userInfo) {
      navigator('/dashboard');
    }
  }, [userInfo, navigator]);

  const handleChange = (e) => {
    const name = e.target.name;
    const prompt = e.target.value;

    setValue({ ...value, [name]: prompt });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const { name, email, password, activeMember } = value;

    if ((!activeMember && !name) || !email || !password) {
      toast.error('Please fill out all fields');
      return;
    }

    if (activeMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  return (
    <>
      <StyledRegister>
        <div className="page">
          <form className="form" onSubmit={submitHandler}>
            <Logo className="logo-center" />
            <h3>{value.activeMember ? 'Login' : 'Sign-up'}</h3>
            {!value.activeMember && (
              <FormSec
                type="text"
                name="name"
                value={value.name}
                handleChange={handleChange}
                lableText="name"
              />
            )}
            <FormSec
              type="email"
              name="email"
              value={value.email}
              handleChange={handleChange}
              lableText="email"
            />
            <FormSec
              type="password"
              name="password"
              value={value.password}
              handleChange={handleChange}
              lableText="password"
            />
            <button
              type="submit"
              className="btn btn-block"
              disabled={isLoading}
            >
              {isLoading ? 'Please Wait...' : 'Get Pesonafied'}
            </button>
          </form>
          <div className="register">
            {value.activeMember ? 'Not a member yet?' : 'Already a member?'}
            <button
              type="button"
              onClick={registeredUser}
              className="member-btn"
            >
              {value.activeMember ? 'Register' : 'Login'}
            </button>
          </div>
        </div>
        <Footer />
      </StyledRegister>
    </>
  );
};

export default Register;
