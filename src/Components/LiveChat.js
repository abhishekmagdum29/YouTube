import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/Redux/chatSlice";
import { generateRandomName } from "../utils/generateRandomName";
import { generateRandomMessages } from "../utils/generateRandomMessages";
import { generateProfileImage } from "../utils/generateRandomProfile";
import { FaChevronDown } from "react-icons/fa";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const LiveChat = () => {
  const [liveChatMessage, setLiveChatMessage] = useState("");
  const [showChat, setShowChat] = useState(true);

  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.messages);

  const handleClick = () => {
    setShowChat(!showChat);
  };

  const submitMessage = () => {
    if (liveChatMessage.length > 0) {
      dispatch(
        addMessage({
          name: "Abhishek",
          message: liveChatMessage,
          profile:
            "https://yt3.ggpht.com/gXDk4xJTl5rAuOGNAoSWgxvoFWcYe-vw32P95CkxdovG2R34vxb5lNF6hlnyevI3xSqRdzP2=s88-c-k-c0x00ffffff-no-rj",
        })
      );
    }

    setLiveChatMessage("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(),
          profile: generateProfileImage(),
        })
      );
    }, 1500);

    return () => clearInterval(timer);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="h-14 border  w-[384px] rounded-t-xl flex items-center justify-between">
        {showChat ? (
          <h1 className=" ml-5 font-semibold text-gray-700"> Live Chat </h1>
        ) : (
          <h1 className=" ml-5 font-semibold text-gray-700"> Show Chat </h1>
        )}

        <FaChevronDown
          className="mr-7 text-xl text-blue-600 hover:text-blue-500 cursor-pointer"
          onClick={() => {
            handleClick();
          }}
        />
      </div>

      {showChat && (
        <div className="w-[384px] ">
          <div className="ml w-full h-[400px]  border-x   overflow-y-scroll flex flex-col-reverse">
            {messages.map((c, i) => (
              <ChatMessage
                name={c.name}
                message={c.message}
                profile={c.profile}
                key={i}
              />
            ))}
          </div>

          <form
            className="ml w-full h-[103px] rounded-b-lg  border px-2 py-3"
            onSubmit={(e) => {
              e.preventDefault();
              if (liveChatMessage.length > 0) {
                dispatch(
                  addMessage({
                    name: "Abhishek",
                    message: liveChatMessage,
                    profile:
                      "https://yt3.ggpht.com/gXDk4xJTl5rAuOGNAoSWgxvoFWcYe-vw32P95CkxdovG2R34vxb5lNF6hlnyevI3xSqRdzP2=s88-c-k-c0x00ffffff-no-rj",
                  })
                );
              }

              setLiveChatMessage("");
            }}
          >
            <div className="flex mt-1">
              <img
                className="w-7 h-7 ml-4  rounded-full"
                src="https://yt3.ggpht.com/gXDk4xJTl5rAuOGNAoSWgxvoFWcYe-vw32P95CkxdovG2R34vxb5lNF6hlnyevI3xSqRdzP2=s88-c-k-c0x00ffffff-no-rj"
                alt="user-logo"
              />
              <span className="ml-4 text-sm text-[#464646] font-semibold">
                Abhishek
              </span>
            </div>

            <div className="flex items-center">
              <input
                onChange={(e) => setLiveChatMessage(e.target.value)}
                type="text"
                value={liveChatMessage}
                placeholder="Say something..."
                className="border-b-2 focus:outline-none focus:border-b-sky-600 outline-none w-64 ml-14 text-sm p-1"
              />
              <div className="w-9 ml-1 border flex items-center justify-center  hover:bg-gray-200 rounded-full">
                <RiArrowRightDoubleLine
                  className=" text-2xl font-medium text-blue-600 m-1 cursor-pointer"
                  onClick={() => submitMessage()}
                />
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LiveChat;
