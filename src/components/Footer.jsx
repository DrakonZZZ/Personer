import logo2 from '../assets/images/logo2.png';
import { styled } from 'styled-components';

const StyledFooter = styled.footer`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 0.8rem;
    color: #474747;
    padding-left: 1rem;
  }
  img {
    width: 4em;
    background: #242424;
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© All Rigth Reserved</p>
      <a href="https://github.com/DrakonZZZ">
        <img src={logo2} alt="drak profile" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
