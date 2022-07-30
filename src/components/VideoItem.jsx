import React from 'react'

class VideoItem extends React.Component {
    state = {     }


  
    render() {
      return (
        <div>
            <h1>{this.props.title}</h1>
            <p>id: {this.props.id}</p>
      </div>
      );
    }
  
  }
  
  export default VideoItem