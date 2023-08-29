import React from "react";
import { LiaThumbsUp, LiaThumbsDown } from "react-icons/lia";

const Comments = ({ info }) => {
  if (!info) return null;
  const { snippet } = info;
  const { topLevelComment } = snippet;

  return (
    <div className="flex items-center ml-1 w-[880px]">
      <img
        className=" rounded-full"
        src={topLevelComment?.snippet?.authorProfileImageUrl}
        alt="img"
      />
      <div className="ml-3 mt-2 ">
        <p className="text-sm font-medium mt-5">
          {topLevelComment?.snippet?.authorDisplayName}
        </p>
        <p className="text-sm mt-1 mb-1">
          {topLevelComment?.snippet?.textOriginal}
        </p>
        <div className="flex mb-1">
          <LiaThumbsUp className="text-2xl mr-3" />
          <LiaThumbsDown className="text-2xl mr-6" />
          <p className="text-sm font-medium">Reply</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
