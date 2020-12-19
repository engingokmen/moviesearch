import React from "react";
import { useParams } from "@reach/router";
import { useFetch } from "../../hooks/useFetch";
import { get } from "lodash";
import { DetailComponent } from "../../components/Detail";
import Loading from "../../components/Loading";

export const Detail = () => {
  const params = useParams();
  const parameters = { i: params.id, plot: "full" };
  const { loading, data } = useFetch(`/`, parameters);

  const detail = get(data, "data", {});
  const { Poster, Title, Actors, Year, Runtime, Director, Rewards } = detail;
  const information = { Title, Year, Runtime, Director, Actors, Rewards };

  const DetailLoading = Loading(DetailComponent);

  return (
    <DetailLoading
      isLoading={loading}
      Title={Title}
      Poster={Poster}
      information={information}
    />
  );
};
