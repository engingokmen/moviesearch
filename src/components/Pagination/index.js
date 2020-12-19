import React, { useState, useEffect } from "react";
import { PaginationNumber } from "./PaginationNumber";

export const Pagination = ({
  page,
  totalResults,
  perPage = 10,
  onPageChange,
}) => {
  const NUMBERSTOSHOW = 3;
  const numberOfPages = Math.ceil(Number(totalResults) / perPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([1, 2, 3]);
  const [setOfPages, setSetOfPages] = useState(1);

  useEffect(() => {
    setCurrentPage(page);
    setPageNumbers([1, 2, 3]);
    setSetOfPages(1);
  }, [numberOfPages, page]);

  const nextSetOfPages = () => {
    if (
      typeof totalResults !== "string" &&
      Math.ceil(numberOfPages / NUMBERSTOSHOW) > setOfPages
    ) {
      setSetOfPages(setOfPages + 1);
      setPageNumbers(pageNumbers.map((x) => x + NUMBERSTOSHOW));
    } else {
      return;
    }
  };

  const previousSetOfPages = () => {
    if (pageNumbers[0] > 1) {
      setSetOfPages(setOfPages - 1);
      setPageNumbers(pageNumbers.map((x) => x - NUMBERSTOSHOW));
    } else {
      return;
    }
  };

  const handleClick = (index) => {
    setCurrentPage(pageNumbers[index]);
    onPageChange(pageNumbers[index]);
  };

  return (
    <nav aria-label="pagination">
      <ul className="pagination">
        <li>
          <a onClick={previousSetOfPages}>
            <span aria-hidden="true">«</span>
            <span className="visuallyhidden">previous set of pages</span>
          </a>
        </li>
        <PaginationNumber
          value={pageNumbers[0]}
          onClick={() => handleClick(0)}
          current={pageNumbers[0] === currentPage}
        />
        <PaginationNumber
          value={pageNumbers[1]}
          onClick={() => handleClick(1)}
          current={pageNumbers[1] === currentPage}
        />
        <PaginationNumber
          value={pageNumbers[2]}
          onClick={() => handleClick(2)}
          current={pageNumbers[2] === currentPage}
        />
        <li>
          <a onClick={nextSetOfPages}>
            <span className="visuallyhidden">next set of pages</span>
            <span aria-hidden="true">»</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};
