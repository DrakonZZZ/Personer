import { PrimarySidebar, SecondarySidebar, Nav } from '../../components';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const StyledParallel = styled.main`
  background-color: var(--primary-3);
  height: 100vh;
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }

  @media (min-width: 992px) {
    background-color: var(--primary-3);
    .dashboard {
      grid-template-columns: 1fr auto;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;

const ParallelLayout = () => {
  return (
    <StyledParallel>
      <section className="dashboard">
        <div>
          <Nav />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
        <PrimarySidebar />
        <SecondarySidebar />
      </section>
    </StyledParallel>
  );
};

export default ParallelLayout;
