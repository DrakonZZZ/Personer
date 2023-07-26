import { ImStatsBars2 } from 'react-icons/im';
import { BsFillQuestionDiamondFill, BsPersonVcard } from 'react-icons/bs';
import { BiAddToQueue } from 'react-icons/bi';
import { MdSettingsAccessibility } from 'react-icons/md';

const links = [
  {
    id: 1,
    title: 'stats',
    path: '/',
    icon: <ImStatsBars2 />,
  },
  {
    id: 2,
    title: 'All Quests',
    path: '/all-quests',
    icon: <BsFillQuestionDiamondFill />,
  },
  {
    id: 3,
    title: 'Add-quest',
    path: '/add-quest',
    icon: <BiAddToQueue />,
  },
  {
    id: 4,
    title: 'Profile',
    path: '/profile',
    icon: <BsPersonVcard />,
  },
];

export default links;
