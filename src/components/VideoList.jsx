import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
    state = {  
    };
  
    showVideos = () => {
      //console.log(this.props.videos);
      const VideoListArray = this.props.videos.map(
         (record)  =>   <VideoItem key={record.id} id={record.id.videoId} title={record.snippet.title} /> 
        
      );
      //console.log(VideoListArray)
         
      return (
        <div>
           { VideoListArray }
        </div>
 )  
    }
    render() {
      return (
        <div>
            <p><i>results:</i></p>
            { this.showVideos() }
      </div>
      );
    }
  
  }
  
  export default VideoList