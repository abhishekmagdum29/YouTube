import React from "react";
import { Link } from "react-router-dom";

const ResultCard = ({ data }) => {
  if (!data) return null;

  const { snippet, id } = data;

  return (
    <Link to={`/watch?v=${id?.videoId}`}>
      <div className="ml-3 p-2 w-[1050px] flex my-6 shadow-lg rounded-xl cursor-pointer">
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt="img"
          className="w-96 h-48 rounded-xl  object-cover"
        />

        <div className="w-2/3 mx-4">
          <p className="text-xl font-semibold mx-6">{snippet?.title}</p>
          <p className="font-medium mx-6 my-3">{snippet?.channelTitle}</p>
          <p className="text-sm text-[#606060] font-normal ml-6">
            {snippet?.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ResultCard;
