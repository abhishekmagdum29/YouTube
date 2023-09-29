import { useSelector } from "react-redux";
import { handleViews } from "../utils/helper";
import useChannelInfo from "../utils/useChannelInfo";
import { showVideoPublishDate } from "../utils/helper";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { viewCount } = statistics;
  const { channelTitle, title, thumbnails, publishedAt, channelId } = snippet;

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const channelInfo = useChannelInfo(channelId);

  return (
    <div
      className={isMenuOpen ? "w-[400px] mx-2  my-2  " : "w-[335px]  my-1 mx-2"}
    >
      <div className="mb-1  w-full">
        <img
          className={
            isMenuOpen
              ? "rounded-2xl w-full h-[225px] object-cover"
              : "rounded-2xl w-full h-[188px] object-cover"
          }
          src={thumbnails?.standard?.url}
          alt="youtube-img"
        />
      </div>

      <div className="w-full h-[112px] mt-2">
        <div className="flex ">
          <img
            className="w-10 h-10 rounded-full object-cover ml-2 mr-3"
            src={channelInfo?.items?.[0]?.snippet?.thumbnails?.default?.url}
            alt=""
          />
          <p className="font-semibold  line-clamp-2 ">{title}</p>
        </div>

        <div className="">
          <p className="text-[#606060] ml-[63px] text-base ">{channelTitle}</p>
          <div className=" ml-[63px]">
            <span className="mr-2 text-sm  text-[#606060]">
              {handleViews(viewCount)} views
            </span>
            <span></span>
            <span className="text-sm text-[#606060]">
              {showVideoPublishDate(publishedAt)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
