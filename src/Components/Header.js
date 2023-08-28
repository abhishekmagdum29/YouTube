import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoDeviceCameraVideo } from "react-icons/go";
import { BsBell } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/Redux/appSlice";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();

  const handleSidebar = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="w-full h-14 my-1 flex justify-between items-center  bg-white">
      <div className="flex justify-center items-center my-1">
        <div
          className="w-10 h-10  hover:bg-gray-200 rounded-full  mx-3 cursor-pointer flex justify-center items-center"
          onClick={() => handleSidebar()}
        >
          <RxHamburgerMenu className="text-xl " />
        </div>

        <Link to={"/"}>
          <img
            className="w-[115px] h-[63px] cursor-pointer"
            src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
            alt="img"
          />
        </Link>
      </div>

      <SearchBar />

      <div className="flex items-center justify-between w-36 mr-8">
        <GoDeviceCameraVideo className="text-2xl f " />
        <BsBell className="text-2xl" />
        <HiOutlineUserCircle className="text-4xl" />
      </div>
    </div>
  );
};

export default Header;
