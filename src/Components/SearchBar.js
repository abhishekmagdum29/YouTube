import React, { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { RxCross1 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { addCacheResult } from "../utils/Redux/cacheSlice";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [clearQuery, setClearQuery] = useState(false);

  const searchCache = useSelector((store) => store.cache);

  const dispatch = useDispatch();

  const nav = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 180);

    return () => {
      clearTimeout(timer);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      addCacheResult({
        [searchQuery]: json[1],
      })
    );
  };

  const handleSuggestion = () => {
    nav(`/results?search_query= ${searchQuery}`);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <div className="flex">
        <form
          className="flex"
          onSubmit={(e) => {
            e.preventDefault();
            nav(`/results?search_query= ${searchQuery}`);
            setShowSuggestions(false);
          }}
        >
          <div className="h-10 w-[545px] realtive items-center flex">
            <input
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              value={searchQuery}
              type="text"
              placeholder="Search"
              className=" w-full h-full rounded-l-full px-12 outline-none border text-lg  focus:outline-none focus:border-sky-400 shadow-sm"
            />

            {(searchQuery.length > 0 || clearQuery) && (
              <div className="absolute left-[510px] flex items-center justify-center w-8 h-8 hover:bg-gray-200 cursor-pointer rounded-full">
                <RxCross1
                  className="font-light text-xl cursor-pointer"
                  onClick={() => {
                    setSearchQuery("");
                    setClearQuery(!clearQuery);
                  }}
                />
              </div>
            )}
          </div>

          {searchQuery.length > 0 ? (
            <div
              className="w-16 h-10 border flex items-center justify-center rounded-r-full shadow-sm bg-gray-50 hover:bg-gray-100 cursor-pointer "
              onClick={() => handleSuggestion()}
            >
              <CiSearch className="text-2xl " />
            </div>
          ) : (
            <div className="w-16 h-10 border flex items-center justify-center rounded-r-full shadow-sm bg-gray-50 hover:bg-gray-100 cursor-pointer">
              <CiSearch className="text-2xl " />
            </div>
          )}
        </form>

        <>
          {suggestions.length > 0 && showSuggestions && (
            <div className="border-x border-b w-[542px]  absolute top-[42px] shadow-sm ml-1 rounded-lg bg-white">
              <div className=" w-full my-3 ">
                {suggestions.map((suggestion) => {
                  return (
                    <Link
                      to={`/results?search_query= ${suggestion}`}
                      key={suggestion}
                      onClick={() => setShowSuggestions(false)}
                    >
                      <div className="flex items-center hover:bg-gray-200">
                        <CiSearch className="text-xl ml-3  my-2" />
                        <p className="ml-3 text-lg font-medium">{suggestion}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </>
      </div>
    </div>
  );
};

export default SearchBar;
