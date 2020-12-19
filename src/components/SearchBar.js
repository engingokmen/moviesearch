import React from "react";
import { debounce } from "lodash";
import { debounceTime } from "../helper";

export const SearchBar = ({
  text,
  onChange,
  onSearch,
  placeholder = "Ara",
}) => {
  const handleOnSearch = debounce((e) => {
    onSearch(e.target.value);
  }, debounceTime);
  return (
    <form>
      <input
        type="text"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          handleOnSearch(e);
          onChange(e.target.value);
        }}
      />
    </form>
  );
};
