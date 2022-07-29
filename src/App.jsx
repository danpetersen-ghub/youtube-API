import React from 'react'
import Hello  from './components/Hello'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import VideoItem from './components/VideoItem'

import youtubeAPI from './api/youtube'

class App extends React.Component {
  state = { 
    videos: [], 
  };

  getVideos = async ( term ) => {
  const response = await fetch(`${youtubeAPI.baseurl}?${term}`, youtubeAPI.meta).then(res => res.json());
  this.setState({ videos: response });
  }

  render() {
    return (
      <div>
           {/* <Hello /> */}
           <SearchBar getVideos={this.getVideos} />
            <VideoList videos={this.state.videos} />
            <VideoDetail />
            <VideoItem />
    </div>
    );
  }

}

export default App
