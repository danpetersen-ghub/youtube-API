import React from 'react'
import VideoItem from './VideoItem'

class VideoList extends React.Component {
    state = {  
    };
  
    showVideos = () => {
      //console.log(this.props.videos);
      const VideoListArray = this.props.videos.map(
         (record)  =>   <VideoItem key={record.id} id={record.id} title={record.title} /> 
        
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
            <h1>VideoList</h1>
            { this.showVideos() }
      </div>
      );
    }
  
  }
  
  export default VideoList