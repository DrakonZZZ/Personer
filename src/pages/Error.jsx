import { Logo, Footer } from '../components';
import { styled } from 'styled-components';

const StyledError = styled.main`
  background-color: #fefe22;
  min-height: 100vh;
  position: relative;
  .nav-wrap {
    z-index: -10;
    nav {
      height: var(--nav-height);
      background: var(--black);
      clip-path: polygon(0 0, 100% 0, 100% 59%, 0 100%);
      position: relative;
      img {
        color: black;
        position: absolute;
        top: -1rem;
        left: 0;
        width: 250px;
      }
    }
  }

  .page {
    min-height: calc(94vh - var(--nav-height));
    display: grid;
    align-items: center;
    padding: 0 2rem;
  }

  .info {
    margin: 0 auto;
    div {
      position: relative;
      color: #303030;
      font-weight: 500;
      margin-bottom: 2rem;
      background-color: #2b2b2b;
      padding: 3rem 4rem;
      clip-path: polygon(0 0, 100% 4%, 90% 95%, 0 100%);
      z-index: 2;
    }
    .p-border {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--primary-2);
      clip-path: polygon(0 0, 95% 10%, 90% 93%, 3% 90%);
      position: absolute;
      z-index: -2;
    }
  }

  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    text-align: center;
    span {
      color: var(--primary-2);
      text-shadow: 3px 3px var(--black);
    }
  }

  footer {
    padding: 0 1rem;
    height: 6vh;
    background-color: var(--black);
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      font-size: 0.9rem;
      color: #efefef;
    }
    img {
      width: 4em;
      object-fit: cover;
      padding: 0.25rem 0.5rem;
      border-radius: 5px;
    }
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

const Error = () => {
  return (
    <>
      <StyledError>
        <div className="nav-wrap">
          <nav>
            <Logo />
          </nav>
        </div>
        <div className=" page">
          <div className="info">
            <div>
              {' '}
              <h1>Page Not Found!!!</h1>
              <span className="p-border"></span>
              we can't seem to find the page you're looking for
            </div>
          </div>
        </div>
        <Footer />
      </StyledError>
    </>
  );
};

export default Error;
