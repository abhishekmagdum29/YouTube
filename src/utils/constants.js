export const GOOGLE_API_KEY = "AIzaSyCQ1jRxzrQgKbBhhLvacr-wDpsw5oQopsk";

export const LIVE_CHAT_COUNT = 100;

export const YOUTUBE_VIDEO_API =
  " https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_TEXT_API =
  "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&type=video&key=" +
  GOOGLE_API_KEY +
  "&q=";

export const COMMENT_THREADS_API =
  " https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=DTfh9TP7zIs&maxResults=20&key= " +
  GOOGLE_API_KEY;

export const VIDEO_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const CHANNEL_INFO_URL =
  "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" +
  GOOGLE_API_KEY +
  "&id=";

export const list = [
  "All",
  "Gaming",
  "Music",
  "Live",
  "Nature",
  "trending",
  "Cricket",
  "Movies",
  "Gagdets",
  "Javascript",
  "Coding",
  "Space",
  "Podcasts",
  "Technology",
  "Science",
];
