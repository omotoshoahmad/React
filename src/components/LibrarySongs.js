
import React, {useRef} from "react";

const LibrarySong = ({song, setCurrentSong}) => {

const selectSongHandler = () => {
    setCurrentSong(song);

}

    return (
        <div onClick={selectSongHandler} className="library-song">
            <img src={song.cover} alt=""></img>
            <div className="song-description">

                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
            
            
        </div>
        
    )
} 

export default LibrarySong;