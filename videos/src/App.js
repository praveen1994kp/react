import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import Youtube from "./apis/Youtube";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onSearchSubmit = term => {
    console.log(term);
    Youtube.get("/search", {
      params: {
        q: term,
        type: "video"
      }
    }).then(
      response => this.setState({ videos: response.data.items }),
      error => console.log(error)
    );
  };
  onVideoSelect = video => {
    console.log(video);
    this.setState({
      selectedVideo: video
    });
  };
  render() {
    return (
      <div className="container">
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        <div className="ui segment">
          <VideoDetail video={this.state.selectedVideo} />
        </div>
        <VideoList
          onVideoClick={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
