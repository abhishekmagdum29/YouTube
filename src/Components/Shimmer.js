import React from "react";

export const Shimmer = () => {
  return (
    <div className="ml-4 mt-14 flex flex-wrap ">
      {Array(50)
        .fill("")
        .map((elem, index) => (
          <div key={index} className="w-[395px] mx-2 my-2">
            <div className="w-full h-[200px] bg-gray-200 rounded-2xl"></div>
            <div className="flex">
              <div className="w-10 h-10 rounded-full ml-3 my-2 bg-gray-200"></div>
              <div>
                <div className="w-[300px] ml-3 h-5 my-2  bg-gray-200"></div>
                <div className="w-[200px] ml-3 h-5 my-2  bg-gray-200"></div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export const SearchCardShimmer = () => {
  return (
    <div className="mx-12 ">
      {Array(25)
        .fill("")
        .map((elem, index) => (
          <div
            key={index}
            className=" mt-6 ml-3 p-2 w-[1050px] flex  my-6 rounded-xl"
          >
            <div className="w-96 h-48 bg-gray-200 rounded-xl"></div>

            <div className="mx-4 mt-3 w-1/2">
              <p className="h-5 w-2/3 bg-gray-200"></p>
              <p className="h-4 w-1/2 my-3 bg-gray-200"></p>
              <p className="h-4 w-1/3 my-8 bg-gray-200"></p>
            </div>
          </div>
        ))}
    </div>
  );
};
