
import React, {useRef} from "react";

const Song = ({currentSong}) => {



    return (
        <div className="song-container">
            <img src={currentSong.cover} alt=""></img>
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
            
        </div>
        
    )
} 

export default Song;