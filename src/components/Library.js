import React from "react";
import LibrarySong from "./LibrarySongs";



const Library = ({songs, setCurrentSong}) => {
    return (
        <div className="Library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (<LibrarySong song={song} 
                setCurrentSong={setCurrentSong}/>)
                 )}
            </div>
        </div>

    )
}

export default Library