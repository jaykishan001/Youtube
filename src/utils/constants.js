const google_api_key = "AIzaSyDKdGOS9jUqHhHqk1Zsyf67C1JqrsnYGq4";

const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
    google_api_key;
export default YOUTUBE_VIDEOS_API;
export const YOUTUBE_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="