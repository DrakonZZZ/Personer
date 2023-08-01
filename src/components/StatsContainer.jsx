import { useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { BiTime } from 'react-icons/bi';
import { GoDiscussionOutdated } from 'react-icons/go';
import { FaBookDead } from 'react-icons/fa';
import StatItem from './StatItem';
import Chart from './Chart';

const StyledStatContainer = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 2rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
  }
`;

const StatsContainer = () => {
  const { stats } = useSelector((store) => store.allQuest);

  const defaultStatValue = [
    {
      title: 'Quest On Wait',
      value: stats.pending || 0,
      icon: <BiTime />,
      color: '#FF8F45',
      bg: 'black',
    },
    {
      title: 'Quest Verification',
      value: stats.interview || 0,
      icon: <GoDiscussionOutdated />,
      color: ' #07D2BE',
      bg: 'black',
    },
    {
      title: 'Quest Rejected',
      value: stats.declined || 0,
      icon: <FaBookDead />,
      color: '#F24E70',
      bg: 'black',
    },
  ];
  return (
    <StyledStatContainer>
      {defaultStatValue.map((item, idx) => {
        return <StatItem key={idx} {...item} />;
      })}
    </StyledStatContainer>
  );
};

export default StatsContainer;
