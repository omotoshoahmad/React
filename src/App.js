import React from "react";
import {useState, useRef} from "react"
import "./styles/App.scss";
import Player from "./components/player.js";
import Song from "./components/song.js";
import "./styles/App.scss";
import Library from "./components/Library";



// import the music data
import data from "./data";
 // we use useRef to select html elements just like javascript Query selector
 const audioRef = useRef(null);

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      
      <Song songs={songs} currentSong={currentSong}/>
      <Player 
              setIsPlaying={setIsPlaying}
              isPlaying={isPlaying} 
              currentSong={currentSong}
              audioRef={audioRef}/>

      <Library songs={songs} 
              setCurrentSong={setCurrentSong}
              audioRef={audioRef}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
      
    </div>
  );
}

export default App;
