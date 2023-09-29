import { useEffect } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { Shimmer } from "./Shimmer";
import { addVideos } from "../utils/Redux/appSlice";
import ButtonList from "./ButtonList";
import { useDispatch, useSelector } from "react-redux";
import VideoCard2 from "./VideoCard2";
import { list } from "../utils/constants";

const VideoContainer = () => {
  const videoList = useSelector((store) => store.app.videoList);

  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVideos = async () => {
    const response = await fetch(YOUTUBE_VIDEO_API);
    const json = await response.json();

    dispatch(addVideos(json.items));
  };

  if (!videoList.length) return <Shimmer />;

  return (
    <div>
      <ButtonList list={list} />
      <div className="flex flex-wrap ml-4 ">
        {videoList.map((video) =>
          video?.id?.videoId ? (
            <Link
              key={video?.id?.videoId}
              to={"/watch?v=" + video?.id?.videoId}
            >
              <VideoCard2 info={video} />
            </Link>
          ) : (
            <Link key={video?.id} to={"/watch?v=" + video?.id}>
              <VideoCard info={video} />
            </Link>
          )
        )}
      </div>
    </div>
  );
};

export default VideoContainer;
