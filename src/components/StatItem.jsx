import { styled } from 'styled-components';

const StyledStatItem = styled.div`
  position: relative;
  color: white;
  padding: 1.5rem 2rem;
  background: var(--black);
  border-radius: var(--borderRadius);
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 3px solid #2a2a2a;
  }
  .value {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.$color};
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: left;
    margin-top: 0.5rem;
  }
  .icon {
    padding: 0.5rem;
    font-size: 0.3rem;
    border-bottom-left-radius: 50%;
    border-top-right-radius: var(--borderRadius);
    background: ${(props) => props.$bg};
    position: absolute;
    top: 0rem;
    right: 0rem;
    display: flex;
    svg {
      font-size: 1.5rem;
      color: ${(props) => props.$color};
    }
  }
`;

const StatItem = ({ title, value, icon, color, bg }) => {
  return (
    <StyledStatItem $color={color} $bg={bg}>
      <header>
        <span className="value">{value}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </StyledStatItem>
  );
};

export default StatItem;
