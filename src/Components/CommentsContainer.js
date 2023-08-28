import React, { useEffect, useState } from "react";
import { GOOGLE_API_KEY } from "../utils/constants";
import Comments from "./Comments";


const CommentsContainer = ({ videoId }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const COMMENTS_API = ` https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&maxResults=20&key= ${GOOGLE_API_KEY}`;

    getCommentData(COMMENTS_API);
  }, [videoId]);

  const getCommentData = async (COMMENTS_API) => {
    const response = await fetch(COMMENTS_API);
    const data = await response.json();

    setComments(data.items);
  };

  if (!comments) return null;

  return (
    <div className="flex ">
      <div className=" my-5 ml-5">
        <p className="font-medium text-lg">Comments</p>
        {comments.map((comment) => (
          <Comments
            info={comment}
            key={comment?.snippet?.toplevelComment?.id}
          />
        ))}
      </div>
    
    </div>
  );
};

export default CommentsContainer;
