import axios from "axios";

const KEY = "AIzaSyBWpUCPabFo071xRVPaNOQoH7hFjA-hRD0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: KEY,
    part: "snippet"
  }
});
