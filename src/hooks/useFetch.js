import api from "../api";
import { useRef, useState, useEffect } from "react";

export const useFetch = (url, params) => {
  const cache = useRef({});
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState("");

  useEffect(() => {
    if (params["s"] === "") return;
    const retrieveData = () => {
      setLoading(true);
      if (cache.current[params["s"] + params["page"]]) {
        const data = cache.current[params["s"] + params["page"]];
        setData(JSON.parse(data));
        setLoading(false);
      } else {
        api.get(url, { params }).then((res) => {
          cache.current[params["s"] + params["page"]] = JSON.stringify(res);
          setLoading(false);
          setData(res);
          setTotalResults(
            res.data.totalResults != "" ? Number(res.data.totalResults) : 0
          );
        });
      }
    };

    retrieveData();
  }, [params["s"], params["page"], params["t"]]);

  return { loading, data, totalResults };
};
