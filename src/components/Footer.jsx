import logo2 from '../assets/images/logo2.png';
import { styled } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillTriangleFill } from 'react-icons/bs';
import { loginUser } from '../../features/users/userSlice';
import { useLocation } from 'react-router-dom';
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
  button {
    background: none;
    outline: none;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    color: var(--primary-3);
    cursor: pointer;
    .demo-icon {
      height: 10px;
      width: 10px;
      color: var(--black);
      animation: mover 0.8s infinite alternate;
    }
    @keyframes mover {
      0% {
        transform: translateY(6px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;

const Footer = () => {
  const { isLoading } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  return (
    <StyledFooter>
      <p>© All Rigth Reserved</p>
      {pathname === '/register' && (
        <button
          type="button"
          disabled={isLoading}
          onClick={() =>
            dispatch(
              loginUser({
                email: 'testUser@test.com',
                password: 'secret',
              })
            )
          }
        >
          For App Demo
          <BsFillTriangleFill className="demo-icon" />
        </button>
      )}
      <a href="https://github.com/DrakonZZZ">
        <img src={logo2} alt="drak profile" />
      </a>
    </StyledFooter>
  );
};

export default Footer;
