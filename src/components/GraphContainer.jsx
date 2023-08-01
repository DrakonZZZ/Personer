import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { AiOutlineBarChart } from 'react-icons/ai';
import { BsGraphDown } from 'react-icons/bs';
import AreaChart from './AreaChart';
import GraphChart from './GraphChart';

const StyledGraphContainer = styled.section`
  border-top: 3px dashed var(--primary-5);
  margin-top: 2rem;
  text-align: center;
  .graph-btns {
    text-align: right;
  }
  button {
    background-color: var(--primary-5);
    border: none;
    border-radius: 2px;
    color: var(--black);
    cursor: pointer;
    font-size: 0.8rem;
    padding: 0.5rem;
    margin-left: 0.5rem;
    transition: all 200ms ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 20px 30px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 10px 26px -18px inset;
  }
  .active {
    color: var(--primary-3);
    background-color: var(--black);
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
  }
  h4 {
    margin-top: 2rem;
    text-align: center;
    margin-bottom: 0.75rem;
    font-weight: 600;
    color: var(--primary-5);
  }
`;

const GraphContainer = () => {
  const [graphData, setGraphData] = useState();
  const [toggle, setToggle] = useState(true);
  const { monthlyQuestRegistration } = useSelector((store) => store.allQuest);

  return (
    <StyledGraphContainer>
      <h4>Monthly Quest Registration</h4>
      <div className="graph-btns">
        <button
          type="button"
          className={`${toggle && 'active'}`}
          onClick={() => setToggle(true)}
        >
          <BsGraphDown />
        </button>
        <button
          type="button"
          className={`${!toggle && 'active'}`}
          onClick={() => setToggle(false)}
        >
          <AiOutlineBarChart />
        </button>
      </div>
      {toggle ? (
        <AreaChart data={monthlyQuestRegistration} />
      ) : (
        <GraphChart data={monthlyQuestRegistration} />
      )}
    </StyledGraphContainer>
  );
};

export default GraphContainer;
