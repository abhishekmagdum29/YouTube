import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../utils/Redux/appSlice";
import CommenstsContainer from "../Components/CommentsContainer";
import VideoInfo from "./VideoInfo";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col my-3">
      <div className="flex ml-5">
        <div
          className={isMenuOpen ? "w-[850px] h-[545px]" : "w-[950px] h-[555px]"}
        >
          <iframe
            className="w-full h-full object-cover"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&rel=0`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="ml-7">
          <LiveChat />
        </div>
      </div>
      <VideoInfo videoId={videoId} />
      <CommenstsContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
