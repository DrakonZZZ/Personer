import { NavLink } from 'react-router-dom';
import links from '../../utils/links';

const Navlinks = ({ sideToggle }) => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { id, title, path, icon } = link;
        return (
          <NavLink
            key={id}
            to={`/dashboard${path}`}
            className={({ isActive }) => {
              return isActive ? 'nav-link active' : 'nav-link';
            }}
            onClick={sideToggle}
            end
          >
            <span className="icon">{icon}</span>
            {title}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navlinks;
