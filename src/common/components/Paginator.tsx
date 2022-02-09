import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from 'common/helpers/paginator.helper';

interface IComponentProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}

// Implementation Description https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
export const Paginator: React.FC<IComponentProps> = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;
  const className = 'pagination-item';

  const paginationRange = usePagination({ currentPage, totalCount, siblingCount, pageSize });
  const lastPage = paginationRange[paginationRange.length - 1];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => onPageChange(currentPage + 1);

  const onPrevious = () => onPageChange(currentPage - 1);

  return (
    <ul className={classnames('pagination-container', { ['pagination-bar']: 'pagination-bar' })}>
      <li className={classnames(className, { disabled: currentPage === 1 })} onClick={onPrevious}>
        <div className="arrow left" />
      </li>

      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) {
          return (
            <li key={index} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={index}
            className={classnames(className, { selected: pageNumber === currentPage })}
            onClick={() => onPageChange(Number(pageNumber))}
          >
            {pageNumber}
          </li>
        );
      })}

      <li className={classnames(className, { disabled: currentPage === lastPage })} onClick={onNext}>
        <div className="arrow right" />
      </li>
    </ul>
  );
};
