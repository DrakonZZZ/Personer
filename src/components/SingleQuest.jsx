import links from '../../utils/links';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import {
  MdLocationOn,
  MdWorkHistory,
  MdPermContactCalendar,
} from 'react-icons/md';
import { deleteQuest, editQuest } from '../../features/quests/questSlice';

const StyledSingleQuest = styled.div`
  background: var(--black);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 5px;
  .head {
    padding: 1rem 1rem 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #39383897;
    h5 {
      letter-spacing: 0;
    }
  }
  .quest-icon {
    width: 50px;
    height: 50px;
    display: grid;
    place-items: center;
    background: var(--primary-3);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
  }
  .info {
    h5 {
      margin-bottom: 0.25rem;
      color: var(--white);
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: #9c9b9b;
      letter-spacing: var(--letterSpacing);
    }
    .guild {
      color: #686868;
    }
  }
  .pending {
    background: #171717;
    color: #ffcf5e;
  }
  .interview {
    background: #171717;
    color: #5aff78;
  }
  .declined {
    background: #171717;
    color: #ff4545;
  }
  .content {
    padding: 1rem 1.5rem;
    .icon {
      color: #797979;
      font-size: 1rem;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 10px;
      .icon-color {
        padding: 0.5rem;
        border-radius: var(--borderRadius);
        color: var(--primary-3);
        background-color: #3e3e2a;
        height: 40px;
        width: 40px;
      }
    }
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--borderRadius);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    text-align: center;
    width: 100px;
    height: 30px;
    background-color: #141414;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    border-bottom: 1px solid #39383897;
  }
  .update-icon {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 0.8rem;
    color: #444444;
    margin-right: 1rem;
  }

  .edit-btn,
  .delete-btn {
    letter-spacing: var(--letterSpacing);
    cursor: pointer;
    height: 30px;
    border-radius: var(--borderRadius);
  }
  .edit-btn {
    color: var(--green-dark);
    background: var(--white);
    margin-right: 0.5rem;
  }
  .delete-btn {
    color: var(--primary-1);
    background: var(--primary-5);
  }
  .btns-center {
    display: flex;
    align-items: center;
  }
  &:hover .actions {
    visibility: visible;
  }
`;

const SingleQuest = ({
  _id: id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  updatedAt,
  status,
}) => {
  const dispatch = useDispatch();

  const date = (param) => {
    const date = new Date(param);
    const locale = navigator.language;
    const dateToFormat = new Intl.DateTimeFormat(locale).format;
    const formattedDate = dateToFormat(date);
    return formattedDate;
  };

  return (
    <>
      <StyledSingleQuest>
        <div className="head">
          <div className="info">
            <h5>{position}</h5>
            <p>
              <span className="guild">Guild: </span>
              {company}
            </p>
          </div>
          <div className="quest-icon">{company.charAt(0)}</div>
        </div>

        <div className="content">
          <div className="content-center">
            <div className="icon">
              <MdLocationOn className="icon-color" />
              {jobLocation}
            </div>
            <div className="icon">
              <MdWorkHistory className="icon-color" />
              {jobType}
            </div>
            <div className="icon">
              <MdPermContactCalendar className="icon-color" />
              {date(createdAt)}
            </div>
          </div>
        </div>
        <div className="actions">
          <div className={`status ${status}`}>{status}</div>
          <div className="btns-center">
            <Link
              to="/dashboard/add-quest"
              className="btn edit-btn"
              onClick={() => {
                dispatch(
                  editQuest({
                    editJobId: id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                );
              }}
            >
              Edit
            </Link>
            <button
              type="button"
              className="btn delete-btn"
              onClick={() => dispatch(deleteQuest(id))}
            >
              Delete
            </button>
          </div>
        </div>
        <div className="update-icon">Updated:{date(updatedAt)}</div>
      </StyledSingleQuest>
    </>
  );
};

export default SingleQuest;
