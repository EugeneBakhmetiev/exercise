import { FC } from "react";
import { PaginationI } from "../types";

export const Pagination: FC<Pick<PaginationI, 'total' | 'current' | 'setPage'>> = ({ total, current, setPage }) => {
  return (
    <ul>
      {Array.from(Array(total)).map((_, index) => (
        <li key={`page_${index}`} className={index === current ? 'page-active' : ''}>
          <button type="button" onClick={() => index !== current && setPage(index)}>
            {index + 1}{' '}
          </button>
        </li>
      ))}
    </ul>
  );
};
