import React from "react";

const ChatMessage = ({ name, message, profile }) => {
  return (
    <div className="px-6 py-1 flex mt-1   items-center">
      <img className="w-6 h-6 rounded-full " src={profile} alt="user-logo" />

      <p className="ml-4 text-sm text-[#464646] font-semibold">{name}</p>
      <p className="ml-3 text-sm">{message}</p>
    </div>
  );
};

export default ChatMessage;
