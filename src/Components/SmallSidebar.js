import React from "react";
import { HiHome, HiPlay } from "react-icons/hi2";
import { MdSubscriptions } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { Link } from "react-router-dom";

const SmallSidebar = () => {
  return (
    <div className="w-16  h-[388px]  flex flex-col mr-2 ">
      <div className="text-center px-1 my-3 h-11  hover:bg-gray-100 rounded-2xl">
        <Link to={"/"}>
          <HiHome className="text-2xl mx-5" />
          <p className="text-xs ml-2">Home</p>
        </Link>
      </div>

      <div className="text-center px-1 my-3">
        <HiPlay className="text-2xl mx-5" />
        <p className="text-xs ml-2">Shorts</p>
      </div>

      <div className="text-center px-1 my-3">
        <MdSubscriptions className="text-2xl mx-5" />
        <p className="text-xs ml-1">Subscription</p>
      </div>

      <div className="text-center px-1 my-3">
        <BsCollectionPlay className="text-2xl mx-5" />
        <p className="text-xs ml-2">Library</p>
      </div>
    </div>
  );
};

export default SmallSidebar;
