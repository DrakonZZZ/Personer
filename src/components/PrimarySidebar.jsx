import Logo from './Logo';
import { IoMdClose } from 'react-icons/io';
import { Navlinks } from '../components';
import { toggleSidebar } from '../../features/users/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';

const StylePriBar = styled.section`
  order: -1;
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    transform: translateX(100vw);
    transition: all 200ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
  .show-sidebar {
    z-index: 99;
    transform: translateX(0vw);
  }
  .content {
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--borderRadius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 8px;
    right: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--primary-3);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: var(--white);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-3);
  }
  .nav-link:hover .icon {
    color: var(--primary-3);
  }
  .icon {
    font-size: 2rem;
    margin-right: 2rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-1);
  }
  .active .icon {
    color: var(--primary-1);
  }
`;

const PrimarySidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const sideToggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <StylePriBar>
      <div
        className={`sidebar-container ${isSidebarOpen ? '' : 'show-sidebar'}`}
      >
        <div className="content">
          <button className="close-btn" onClick={sideToggle}>
            <IoMdClose />
          </button>
          <div>
            <Logo />
          </div>
          <Navlinks sideToggle={sideToggle} />
        </div>
      </div>
    </StylePriBar>
  );
};

export default PrimarySidebar;
