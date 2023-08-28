import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ResultCard from "./ResultCard";
import { GOOGLE_API_KEY } from "../utils/constants";
import { SearchCardShimmer } from "./Shimmer";

const SearchResultContainer = () => {
  const [searchResults, setSearchResults] = useState();
  const [searchParam] = useSearchParams();
  const query = searchParam.get("search_query");

  useEffect(() => {
    const SEARCH_RESULT_API =
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&safeSearch=moderate&key=` +
      GOOGLE_API_KEY;

    fetchSearchResult(SEARCH_RESULT_API);
  }, [query]);

  const fetchSearchResult = async (SEARCH_RESULT_API) => {
    const data = await fetch(SEARCH_RESULT_API);
    const json = await data.json();

    setSearchResults(json?.items);
  };

  if (!searchResults) return <SearchCardShimmer />;

  return (
    <div className=" mx-12">
      {searchResults.map((result) => (
        <ResultCard data={result} key={result?.id?.videoId} />
      ))}
    </div>
  );
};

export default SearchResultContainer;
