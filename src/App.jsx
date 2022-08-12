import React from 'react'
import Hello  from './components/Hello'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
// import VideoItem from './components/VideoItem'

import youtubeAPI from '../api/youtube'

class App extends React.Component {
  state = { 
    // videos: [
    //   { id: 1 , title: 'Video 1', description: 'This is a video 1', thumbnail: 'https://i.ytimg.com/vi/XGSy3_Czz8k/hqdefault.jpg'},
    //   { id: 2 , title: 'Video 2', description: 'This is a video 2', thumbnail: 'https://i.ytimg.com/vi/XGSy3_Czz8k/hqdefault.jpg'},
    // ], 
    videos: [
      {
        "kind": "youtube#searchResult",
        "etag": "mejVNYD0Z0aSgbU_b7v_zLZP8F8",
        "id": {
          "kind": "youtube#video",
          "videoId": "katD5xvV2t8"
        },
        "snippet": {
          "publishedAt": "2020-07-27T08:46:54Z",
          "channelId": "UCPD0YqFZjbxGEuMjqnGMxKA",
          "title": "Cat crying",
          "description": "",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/katD5xvV2t8/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/katD5xvV2t8/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/katD5xvV2t8/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Siti Nazihah",
          "liveBroadcastContent": "none",
          "publishTime": "2020-07-27T08:46:54Z"
        }
      }
    ],
  };

  getVideos = async ( term ) => {
      const response = await fetch(`${youtubeAPI.baseURL}?key=${youtubeAPI.key}&${youtubeAPI.queryparams}${term}` ).then(res => res.json());
      console.log(response.items[0]);
      this.setState( { videos: response.items } );
  }

  render() {
    return (
      <div>
           {/* <Hello /> */}
           <SearchBar getVideos={this.getVideos} />
            <VideoList videos={this.state.videos} />
            <VideoDetail />
            {/* <VideoItem /> */}
    </div>
    );
  }

}

export default App
