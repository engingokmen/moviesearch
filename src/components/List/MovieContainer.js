import React from "react";
import { Link } from "@reach/router";

export const MovieContainer = ({ item }) => {
  return (
    <div className="movie-wrapper">
      <Link to={`detail/${item.imdbID}`}>
        <img src={item.Poster} alt={item.Title} />
      </Link>
      <div>{item.Title}</div>
      <div>{item.Year}</div>
    </div>
  );
};
