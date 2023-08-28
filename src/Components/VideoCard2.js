import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useChannelInfo from "../utils/useChannelInfo";
import { Shimmer } from "./Shimmer";
import { handleViews } from "../utils/helper";
import { showVideoPublishDate } from "../utils/helper";

const VideoCard2 = ({ info }) => {
  const { snippet } = info;
  const { title, channelTitle, thumbnails, channelId, publishedAt } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const channelInfo = useChannelInfo(channelId);


  if (!info) return <Shimmer />;

  return (
    <div
      className={isMenuOpen ? "w-[400px] mx-2  my-2 " : "w-[335px]  my-1 mx-2"}
    >
      <div className="mb-1  w-full">
        <img
          className={
            isMenuOpen
              ? "rounded-2xl w-full h-[225px] object-cover"
              : "rounded-2xl w-full h-[188px] object-cover"
          }
          src={thumbnails?.high?.url}
          alt="youtube-img"
        />
      </div>

      <div className="w-full h-[112px] mt-2">
        <div className="flex ">
          <img
            className="w-10 h-10 rounded-full object-cover ml-2 mr-3"
            src={channelInfo?.items[0]?.snippet?.thumbnails?.default?.url}
            alt=""
          />
          <p className="font-semibold  line-clamp-2 ">{title}</p>
        </div>

        <div>
          <p className="text-[#606060] ml-[62px] text-base ">
            {channelTitle}
          </p>
          <div className="flex">
            <p className="text-sm  text-[#606060] ml-[62px] mr-3">
              {handleViews(channelInfo?.items?.[0]?.statistics?.viewCount)}{" "}
              views
            </p>
            <p className="text-sm  text-[#606060]">{showVideoPublishDate(publishedAt)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard2;
