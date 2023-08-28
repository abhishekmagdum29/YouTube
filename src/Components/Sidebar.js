import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HiHome, HiSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { GoTrophy } from "react-icons/go";
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdOutlineWatchLater,
} from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { HiOutlineFire } from "react-icons/hi2";
import { LiaShoppingBagSolid, LiaMusicSolid } from "react-icons/lia";
import {
  PiFilmSlateLight,
  PiMonitorPlayLight,
  PiYoutubeLogoLight,
} from "react-icons/pi";
import SmallSidebar from "./SmallSidebar";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // if (!isMenuOpen) return null;

  return !isMenuOpen ? (
    <SmallSidebar />
  ) : (
    <div className="p-3 w-[216px] h-[100%]   bg-white">
      <ul>
        <div className=" border-b  w-[204px] ">
          <Link to={"/"}>
            <li className="flex px-3 bg-gray-100 rounded-xl  items-center text-sm font-bold h-10 cursor-pointer ">
              <HiHome className=" text-xl mr-5" />
              Home
            </li>
          </Link>

          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl items-center text-sm h-10 cursor-pointer">
            <PiYoutubeLogoLight className=" text-2xl  mr-5" /> Shorts
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl items-center text-sm cursor-pointer h-10 mb-3">
            <MdOutlineSubscriptions className="text-2xl  mr-5" />
            Subscriptions
          </li>
        </div>

        <div className=" border-b  mt-3">
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl items-center text-sm  h-10 cursor-pointer">
            <BsCollectionPlay className=" text-2xl mr-5" />
            Library
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl items-center text-sm  h-10 cursor-pointer">
            <MdHistory className=" text-2xl mr-5" /> History
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl items-center text-sm  h-10 cursor-pointer ">
            <PiMonitorPlayLight className=" text-2xl mr-5" /> Your Videos
          </li>

          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl items-center text-sm  h-10 cursor-pointer ">
            <MdOutlineWatchLater className=" text-2xl mr-5" /> Watch later
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl items-center text-sm  h-10 cursor-pointer mb-3">
            <AiOutlineLike className=" text-2xl mr-5" /> Liked videos
          </li>
        </div>

        <div className="mt-3 border-b">
          <h1 className="px-3 mb-3  font-normal">Explore</h1>

          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl  items-center text-sm  h-10 cursor-pointer ">
            <HiOutlineFire className=" text-2xl mr-5" /> Trending
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl  items-center text-sm  h-10 cursor-pointer ">
            <LiaShoppingBagSolid className=" text-2xl mr-5" /> Shopping
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl  items-center text-sm  h-10 cursor-pointer ">
            <LiaMusicSolid className=" text-2xl mr-5" /> Music
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl  items-center text-sm  h-10 cursor-pointer ">
            <PiFilmSlateLight className=" text-2xl mr-5" /> Films
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl  items-center text-sm  h-10 cursor-pointer ">
            <HiSignal className=" text-2xl mr-5" /> Live
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl  items-center text-sm  h-10 cursor-pointer ">
            <SiYoutubegaming className=" text-2xl mr-5" /> Gaming
          </li>
          <li className="flex w-[204px] px-3 hover:bg-gray-100 rounded-xl  items-center text-sm  h-10 cursor-pointer mb-3">
            <GoTrophy className=" text-2xl mr-5" /> Sport
          </li>
        </div>

        <div className="mt-3 ]">
          <h1 className="text-sm text-left px-3 font-normal">
            Terms Privacy Policy & SafetyHow YouTube worksTest new features
          </h1>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
