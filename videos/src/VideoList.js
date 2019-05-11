import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoClick }) => {
  return (
    <div className="ui segment">
      {videos.map(video => {
        return (
          <VideoItem
            onVideoClick={onVideoClick}
            key={video.id.videoId}
            video={video}
          />
        );
      })}
    </div>
  );
};

export default VideoList;
