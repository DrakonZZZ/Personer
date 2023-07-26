import Navlinks from './Navlinks';
import Logo from './Logo';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import links from '../../utils/links';

const StyleSecBar = styled.section`
  display: none;
  overflow: hidden;
  @media (min-width: 992px) {
    display: block;
    background-image: radial-gradient(#f7ff11 0.8px, transparent 0.8px),
      radial-gradient(#f7ff11 0.8px, #222 0.8px);
    background-size: 32px 32px;
    background-position: 0 0, 16px 16px;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px,
      rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    .sidebar-container {
      min-height: 100vh;
      height: 100%;
      width: 300px;
      margin-right: -300px;
      border-left: 2px solid var(--primary-3);
      border-right: 2px solid var(--primary-3);
      transition: var(--transition);
    }
    .content {
      position: sticky;
      top: 0;
      padding: 0 15px;
      box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
    }

    .show-sidebar {
      margin-right: 0;
    }
    .side-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.8;
      img {
        height: 95px;
      }
    }

    .links {
      background-color: var(--primary-3);
      border-radius: 8px;
      display: flex;
      justify-content: center;
    }

    .nav-links {
      padding: 1rem 0;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--primary-5);
      padding: 1rem 0;
      letter-spacing: 0.2rem;
      text-transform: capitalize;
      transition: all 200ms ease-in-out;
    }
    .nav-link:hover {
      color: var(--black);
    }
    .nav-link:hover .icon {
      color: var(--black);
    }
    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
      transition: all 200ms ease-in-out;
    }
    .active {
      color: var(--black);
    }
    .active .icon {
      color: var(--primary-500);
    }
  }
`;

const SecondarySidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);

  return (
    <StyleSecBar>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className="content">
          <div className="side-logo">
            <Logo />
          </div>
          <div className="links">
            <Navlinks />
          </div>
        </div>
      </div>
    </StyleSecBar>
  );
};

export default SecondarySidebar;
