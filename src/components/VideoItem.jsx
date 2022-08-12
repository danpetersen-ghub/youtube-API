import React from 'react'

class VideoItem extends React.Component {
    state = {     }


  
    render() {
      return (
        <div>
             <p>id: {this.props.id} - {this.props.title}</p>
      </div>
      );
    }
  
  }
  
  export default VideoItem