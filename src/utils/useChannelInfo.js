import { useEffect, useState } from "react";
import { CHANNEL_INFO_URL } from "./constants";

const useChannelInfo = (channelId) => {
  const [channelInfo, setChannelInfo] = useState();

  useEffect(() => {
    getChannelInfo(channelId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getChannelInfo = async (channelId) => {
    const response = await fetch(CHANNEL_INFO_URL + channelId);
    const data = await response.json();

    setChannelInfo(data);
  };
  return channelInfo;
};

export default useChannelInfo;
