import React from "react";
import { get } from "lodash";
import { MovieContainer } from "./MovieContainer";

export const List = ({ data }) => {
  return get(data, "data.Search", []).map((x) => (
    <MovieContainer item={x} key={x.imdbID} />
  ));
};
