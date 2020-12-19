import React from "react";
export const PaginationNumber = ({ value, current = false, onClick }) => {
  return (
    <li>
      <a value={value} aria-current={current && "page"} onClick={onClick}>
        {value}
      </a>
    </li>
  );
};
