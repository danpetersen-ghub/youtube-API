import React from 'react'
import Hello  from './components/Hello'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoDetail from './components/VideoDetail'
import VideoItem from './components/VideoItem'

class App extends React.Component {
  state = {  
  };

  render() {
    return (
      <div>
           {/* <Hello /> */}
           <SearchBar />
            <VideoList />
            <VideoDetail />
            <VideoItem />
    </div>
    );
  }

}

export default App
