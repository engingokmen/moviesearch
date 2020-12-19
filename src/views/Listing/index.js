import React, { useState } from "react";
import { Pagination, SearchBar } from "../../components";
import { List } from "../../components/List";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/Loading";

export const Listing = () => {
  const [searchText, setSearchText] = useState("");
  const [parameters, setParameters] = useState({
    type: "movie",
    s: "",
    page: 1,
  });
  const { loading, data, totalResults } = useFetch(`/`, parameters);

  const handleOnSearch = (value) => {
    setParameters({ ...parameters, s: value, page: 1 });
  };

  const handlePagination = (currentPage) => {
    setParameters({ ...parameters, page: currentPage });
  };

  const ListLoading = Loading(List);

  return (
    <div className="listing-wrapper">
      <SearchBar
        text={searchText}
        onChange={(value) => setSearchText(value)}
        onSearch={handleOnSearch}
        placeholder="Film Ara"
      />
      <div className="content">
        <ListLoading isLoading={loading} data={data} />
      </div>
      <Pagination
        page={parameters["page"]}
        onPageChange={handlePagination}
        totalResults={totalResults}
      />
    </div>
  );
};
