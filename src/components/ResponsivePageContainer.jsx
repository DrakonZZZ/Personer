import { useSelector, useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md';
import { pageNavigation } from '../../features/quests/allQuestSlice';

const StyledPageContainer = styled.div`
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  .btn-container {
    background: var(--primary-1);
    border-radius: var(--borderRadius);
  }
  .page-btn {
    background: none;
    border: none;
    border-top: 3px solid var(--primary-1);
    width: 40px;
    height: 40px;
    font-weight: 700;
    font-size: 1.1rem;
    color: var(--primary-5);
    transition: all 200ms ease-in-out;
    cursor: pointer;
  }

  .page-btn:hover {
    border-top: 3px solid var(--white);
  }

  .active {
    border-top: 3px solid var(--primary-5) !important;
  }
  .prev-btn,
  .next-btn {
    width: 80px;
    height: 40px;
    background: none;
    font-size: 1.2rem;
    border: none;
    color: var(--primary-5);
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: var(--transition);
    span {
      display: flex;
    }
  }
  .prev-btn {
    justify-content: flex-start;
  }
  .next-btn {
    justify-content: flex-end;
  }
  .prev-btn:hover,
  .next-btn:hover {
    background: var(--primary-500);
    color: var(--white);
  }

  @media (max-width: 680px) {
    .page-btn {
      width: 30px;
      height: 30px;
      font-weight: 700;
      font-size: 1rem;
    }
    .page-btn:nth-child(odd) {
      display: none;
    }

    .prev-btn,
    .next-btn {
      width: 60px;
      height: 40px;
      font-size: 1.1rem;
    }
  }
`;

const ResponsivePageContainer = () => {
  const { totalPages, page } = useSelector((store) => store.allQuest);
  const dispatch = useDispatch();

  const pages = Array.from({ length: totalPages }, (noparam, idx) => {
    return idx + 1;
  });
  const nextPage = () => {
    let currPage = page + 1;
    if (currPage > totalPages) {
      currPage = 1;
    }
    dispatch(pageNavigation(currPage));
  };

  const prevPage = () => {
    let currPage = page - 1;
    if (currPage < 1) {
      currPage = totalPages;
    }
    dispatch(pageNavigation(currPage));
  };

  return (
    <StyledPageContainer>
      {totalPages > 1 && (
        <>
          <button type="button" onClick={prevPage} className="prev-btn">
            <span>
              <MdOutlineKeyboardArrowLeft className="nav-icon" />
            </span>
            Prev
          </button>
          {pages.map((pageNum) => {
            return (
              <button
                type="button"
                key={pageNum}
                onClick={() => dispatch(pageNavigation(pageNum))}
                className={`${
                  pageNum === page ? 'page-btn active' : 'page-btn'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          <button type="button" onClick={nextPage} className="next-btn">
            Next
            <span>
              <MdOutlineKeyboardArrowRight className="nav-icon" />
            </span>
          </button>
        </>
      )}
    </StyledPageContainer>
  );
};

export default ResponsivePageContainer;
