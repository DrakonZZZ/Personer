import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';

const StyledQuestContainer = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

const QuestContainer = () => {
  const { quest, isloading } = useSelector((store) => store.allQuest);
  const dispatch = useDispatch();

  if (isloading) {
    return <h2>Loading...</h2>;
  }

  if (quest.length === 0) {
    return <h2>No quests found...</h2>;
  }
  return <StyledQuestContainer>Quest Container</StyledQuestContainer>;
};

export default QuestContainer;
