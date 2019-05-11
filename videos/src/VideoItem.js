import React from "react";

const VideoItem = ({ video, onVideoClick }) => {
  if (!video) return <div>Loading....</div>;

  return (
    <div
      className="ui link cards"
      style={{ cursor: "pointer", display: "flex" }}
      onClick={() => onVideoClick(video)}
    >
      <div className="image">
        <img
          alt={video.snippet.title}
          src={video.snippet.thumbnails.medium.url}
        />
      </div>
      <div className="ui content">
        <div className="ui header">{video.snippet.title} </div>
        <div className="ui description"> {video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
