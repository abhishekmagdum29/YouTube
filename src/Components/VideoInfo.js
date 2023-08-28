import React, { useEffect, useState } from "react";
import { VIDEO_INFO_URL, CHANNEL_INFO_URL } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { TiArrowForwardOutline } from "react-icons/ti";
import { BsThreeDots } from "react-icons/bs";
import { useSelector } from "react-redux";
import { handleViews } from "../utils/helper";
import { showVideoPublishDate } from "../utils/helper";

const VideoInfo = () => {
  const [videoInfo, setVideoInfo] = useState();
  const [channelInfo, setChannelInfo] = useState();
  const [channelId, setChannelId] = useState();
  const [showDesc, setShowDesc] = useState(false);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  useEffect(() => {
    getVideoInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoId]);

  useEffect(() => {
    getChannelInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  const getVideoInfo = async () => {
    const data = await fetch(VIDEO_INFO_URL + videoId);
    const json = await data.json();
    setVideoInfo(json);
   
    setChannelId(json?.items?.[0]?.snippet?.channelId);
  };

  const getChannelInfo = async () => {
    const data = await fetch(CHANNEL_INFO_URL + channelId);
    const json = await data.json();

    setChannelInfo(json);
  };

  const handleDescription = () => {
    setShowDesc(!showDesc);
  };

  const description = videoInfo?.items?.[0]?.snippet?.description || "";

  if (!videoId && !channelId) return null;

  return (
    <div className="flex">
      <div>
        <div className="w-[950px] ml-5 my-2  py-2 ">
          <p className="text-xl font-semibold mb-3">
            {videoInfo?.items?.[0]?.snippet?.title}
          </p>

          <div
            className={
              isMenuOpen
                ? "w-[850px]  flex items-center "
                : "w-[950px] flex items-center "
            }
          >
            <div className="flex items-center">
              <img
                className="w-12 rounded-full object-cover"
                src={channelInfo?.items?.[0]?.snippet?.thumbnails?.medium?.url}
                alt="img"
              />

              <div className="ml-2">
                <p className="text-lg font-semibold">
                  {videoInfo?.items?.[0]?.snippet?.channelTitle}
                </p>
                <p className="text-sm  text-[#606060] ">
                  {handleViews(
                    channelInfo?.items?.[0]?.statistics?.subscriberCount
                  )}
                  <span className="text-sm text-[#606060] ml-1">
                    subscribers
                  </span>
                </p>
              </div>

              <div className="w-[94px] h-[36px] ml-10 ">
                <button className="w-full h-full bg-black border text-white rounded-3xl font-medium">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="flex ml-56">
              <div className="flex justify-center items-center w-[140px] h-[36px] border rounded-3xl bg-gray-100 hover:bg-gray-200">
                <AiOutlineLike className="ml-2 mr-1 text-xl cursor-pointer" />
                <p className="font-semibold mr-2">
                  {handleViews(videoInfo?.items?.[0]?.statistics?.likeCount)}
                </p>
                <p className="ml-2 text-sm font-light text-[#606060]">|</p>
                <AiOutlineDislike className="ml-3 text-xl cursor-pointer" />
              </div>

              <div className="flex items-center justify-center w-[96px] h-[36px] border ml-9 rounded-3xl bg-gray-100 hover:bg-gray-200 cursor-pointer">
                <TiArrowForwardOutline className="text-2xl mr-1" />
                <p className="font-semibold">Share</p>
              </div>

              <div className="w-9 border rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 cursor-pointer ml-7">
                <BsThreeDots className="text-lg" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={
            isMenuOpen
              ? "w-[850px] ml-5 p-5 rounded-xl outline-0 bg-gray-100 hover:bg-gray-200 cursor-pointer"
              : "w-[950px] ml-5 p-5 rounded-xl outline-0 bg-gray-100  hover:bg-gray-200 cursor-pointer"
          }
        >
          <div className="flex ">
            <p className="mr-3 font-semibold">
              {handleViews(videoInfo?.items?.[0]?.statistics?.viewCount)} {"  "}
              views
            </p>
            <p className="font-semibold">
              {showVideoPublishDate(
                videoInfo?.items?.[0]?.snippet?.publishedAt
              )} 
            </p>
          </div>

          <div className=" whitespace-pre-line ">
            <p>{showDesc ? description : description.slice(0, 70)}</p>
            <h2
              className="cursor-pointer mt-1 font-semibold"
              onClick={() => {
                handleDescription();
              }}
            >
              {showDesc ? "Show less" : " ...more"}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoInfo;
