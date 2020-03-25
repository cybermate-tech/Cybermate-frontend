import React from 'react';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cybermate</h1>
        <h2>Home to all things tech !</h2>
      </header>
      <div id="App-body">
        <h2 className="Title">Test video :</h2>
        <center><VideoPlayer url='testvideo.mp4' 
          subtitle="This is a video from the YouTube channel 'Webdriver Torso' 
          which AFAIK is/was used by YT for testing their video quality"/>
        </center>
      </div>
    </div>
  );
}

function VideoPlayer(props) {
  return (
    <div className="VideoPlayer">
      <ReactPlayer url={props.url} controls muted></ReactPlayer>
      <p><i>{props.subtitle}</i></p>
    </div>
  );
}

export default App;
