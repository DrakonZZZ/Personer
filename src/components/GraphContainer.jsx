import { useState } from 'react';
import { useSelector } from 'react-redux';
import { styled } from 'styled-components';

const StyledGraphContainer = styled.section`
  border-top: 3px dashed var(--primary-5);
  margin-top: 2rem;
  text-align: center;
  button {
    color: var(--primary-3);
    font-size: 1.25rem;
    cursor: pointer;
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
  const { monthlyRegistration } = useSelector((store) => store.allQuest);

  return (
    <StyledGraphContainer>
      <h4>Montly Quest Registration</h4>
    </StyledGraphContainer>
  );
};

export default GraphContainer;
