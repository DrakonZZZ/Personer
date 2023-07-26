import { Link } from 'react-router-dom';
import { Logo, Footer } from '../components';
import { styled } from 'styled-components';

const StyledHome = styled.main`
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
    min-height: calc(99vh - 6vh);
    display: grid;
    align-items: center;
    padding: 0 2rem;
  }

  .info {
    margin: 0 auto;
    p {
      position: relative;
      color: #3b3b3b;
      font-weight: 500;
      margin-bottom: 2rem;
      background-color: #2b2b2b;
      padding: 3rem;
      clip-path: polygon(0 0, 100% 4%, 90% 94%, 0 100%);
      z-index: 2;
    }
    .p-border {
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: var(--primary-2);
      clip-path: polygon(0 0, 95% 8%, 90% 93%, 4% 96%);
      position: absolute;
      z-index: -2;
    }
  }

  h1 {
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-shadow: 2px 2px var(--primary-7);
    font-weight: 600;
    span {
      color: var(--primary-2);
      text-shadow: 3px 3px var(--black);
    }
  }

  .btn-wrap {
    display: flex;
    justify-content: center;
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    background-color: transparent;
    .nav-wrap {
      background-color: #fefe22;
    }
    .page {
      padding: 0;
    }
    .btn-wrap {
      display: flex;
      justify-content: end;
      margin-right: 3rem;
    }
    .info {
      margin-left: 4rem;
    }
    .main-img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -10;
    }
  }
`;

const Homepage = () => {
  console.log(
    "%cHmm aren't you are curious one",
    'color: black; font-size:36px;background: yellow;font-family:cursive'
  );
  return (
    <StyledHome>
      <div className=" page">
        <div className="info">
          <h1>
            Persona <span>Tracking</span> App
          </h1>
          <p>
            <span className="p-border"></span>
            Tattooed post-ironic sriracha lyft DIY. Celiac brunch selvage,
            keffiyeh fixie post-ironic butcher pitchfork distillery ramps
            fashion axe sus iPhone heirloom mustache. Bicycle rights tote bag
            kale chips pickled edison bulb. Food truck tousled ethical, banjo
            hexagon chia photo booth sus. Tote bag portland retro vexillologist
            knausgaard semiotics. Chicharrones gatekeep chillwave blog photo
            booth vice narwhal actually tbh cardigan green juice ramps.
          </p>

          <div className="btn-wrap">
            <Link to="/register">
              <button type="button" className="btn-normal btn-hero">
                Login/Register
              </button>
            </Link>
          </div>
        </div>
        <img
          src="https://images6.alphacoders.com/944/944540.jpg"
          alt=""
          className="main-img"
        />
      </div>
      <Footer />
    </StyledHome>
  );
};

export default Homepage;
