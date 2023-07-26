import { FaAlignJustify, FaUserCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import Logo from './Logo';
import { useState } from 'react';
import { toggleSidebar, logout } from '../../features/users/userSlice';
import { styled } from 'styled-components';

const StyledNav = styled.nav`
  order: 1;
  background-color: var(--black);
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  .logo {
    display: flex;
    align-items: center;
    width: 200px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .tgl-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-2);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    position: relative;
  }
  .btn-user {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    background-color: transparent;
    border: none;
    color: var(--primary-2);
    font-size: 2rem;
    cursor: pointer;
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: -20px;
    background: var(--primary-2);
    padding: 0.5rem;
    text-align: center;
    opacity: 0;
    border-radius: var(--borderRadius);
    color: var(--primary-6);
    transition: all 200ms ease-in-out;
  }

  .border {
    border-bottom: 1px solid var(--primary-4);
  }
  .show-dropdown {
    opacity: 1;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-6);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    font-weight: 00;
    cursor: pointer;
  }

  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
      color: var(--primary-2);
      font-weight: 600;
    }
  }
`;

const Nav = () => {
  const [logoutDisplay, setLogoutDisplay] = useState(false);
  const { userInfo } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const sideToggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <StyledNav>
      <div className="nav-center">
        <div className="btn-container">
          <button
            type="button"
            className="btn-user"
            onClick={() => setLogoutDisplay(!logoutDisplay)}
          >
            <FaUserCircle />
          </button>
          <div className={`dropdown ${logoutDisplay ? 'show-dropdown' : ''}`}>
            <div className="border">Drak</div>
            <button
              type="button"
              className="dropdown-btn"
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          </div>
        </div>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <button type="button" onClick={sideToggle} className="tgl-btn">
          <FaAlignJustify />
        </button>
      </div>
    </StyledNav>
  );
};

export default Nav;
