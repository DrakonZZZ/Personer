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
  h4.line {
    position: relative;
    z-index: 1;
    font-weight: 600;
    text-align: center;
    color: var(--primary-6);
    :before {
      border-top: 3px solid var(--primary-6);
      content: '';
      margin: 0 auto;
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      bottom: 0;
      width: 95%;
      z-index: -1;
    }

    span {
      background: var(--primary-3);
      padding: 0 15px;
    }
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

  return (
    <StyledQuestContainer>
      <h4 className="line">
        <span>Quest List</span>
      </h4>
      {isLoading ? (
        <Loading />
      ) : quest.length === 0 ? (
        <StyledQuestContainer>
          <h2>No quests found</h2>
          <GiHalfDead className="empty-icon" />
        </StyledQuestContainer>
      ) : (
        <div className="quest">
          {quest.map((q) => {
            return <SingleQuest key={q._id} {...q} />;
          })}
        </div>
      )}
    </StyledQuestContainer>
  );
};

export default QuestContainer;
