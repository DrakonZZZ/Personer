import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { displayStats } from '../../../features/quests/allQuestSlice';
import { Loading, StatsContainer, GraphContainer } from '../../components';

const Stats = () => {
  const { isLoading, monthlyQuestRegistration } = useSelector(
    (store) => store.allQuest
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(displayStats());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyQuestRegistration.length > 0 && <GraphContainer />}
    </>
  );
};

export default Stats;
