import React from 'react'
import Hello  from './components/Hello'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
// import VideoItem from './components/VideoItem'

import youtubeAPI from '../api/youtube'

class App extends React.Component {
  state = { 
    videos: [
      { id: 1 , title: 'Video 1', description: 'This is a video 1', thumbnail: 'https://i.ytimg.com/vi/XGSy3_Czz8k/hqdefault.jpg'},
    ], 
  };

  getVideos = async ( term ) => {
      const response = await fetch(`${youtubeAPI.baseurl}`, youtubeAPI.meta).then(res => res.json());
      console.log(response);
      this.setState( { videos: response } );
  }

  render() {
    return (
      <div>
           {/* <Hello /> */}
           <SearchBar getVideos={this.getVideos} />
            <VideoList videos={this.state.videos} />
            {/* <VideoDetail /> */}
            {/* <VideoItem /> */}
    </div>
    );
  }

}

export default App
