import { useEffect } from 'react';
import SingleQuest from './SingleQuest';
import Loading from './Loading';
import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { getAllQuest } from '../../features/quests/allQuestSlice';
import { GiHalfDead } from 'react-icons/gi';

const StyledQuestContainer = styled.section`
  margin-top: 4rem;
  padding: 0 1rem;
  h2 {
    text-align: center;
    color: var(--primary-6);
    font-weight: 800;
  }
  .empty-icon {
    height: 200px;
    width: 100%;
    color: var(--primary-6);
    display: flex;
    justify-content: center;
    text-align: center;
  }
  & > h5 {
    font-weight: 700;
  }
  .quest {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 992px) {
    .quest {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

const QuestContainer = () => {
  const { quest, isLoading } = useSelector((store) => store.allQuest);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuest());
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (quest.length === 0) {
    return (
      <StyledQuestContainer>
        <h2>No quests found</h2>
        <GiHalfDead className="empty-icon" />
      </StyledQuestContainer>
    );
  }

  return (
    <StyledQuestContainer>
      <h5>Quest info</h5>
      <div className="quest">
        {quest.map((q) => {
          return <SingleQuest key={q._id} {...q} />;
        })}
      </div>
    </StyledQuestContainer>
  );
};

export default QuestContainer;
