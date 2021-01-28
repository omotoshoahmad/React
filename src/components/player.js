import React, {useState}from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const Player= ({currentSong, isPlaying, setIsPlaying, audioRef}) => {


   
    const [songInfo, setSongInfo] = useState({
        currentTime : null,
        duration: null
    });

   

    const playSongHandler = () => {
        if (isPlaying){
            audioRef.current.pause();
            setIsPlaying(!isPlaying);
        }else{

            audioRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const timeUpdateHandler = (e) => {

        const duration = e.target.duration;
        const current = e.target.currentTime;
        setSongInfo({...songInfo, currentTime: current, duration: duration})

    }

    const getTime = (time) => {
        return(
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2) 
        );
    }
    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo, currentTime: e.target.value})
    }

    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input min={0} max={songInfo.duration} value={songInfo.currentTime} onChange={dragHandler} type="range"/>
                <p>{getTime(songInfo.duration)}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skip-back" icon={faAngleLeft} size="2x"></FontAwesomeIcon>
                <FontAwesomeIcon onClick={playSongHandler} className="play" icon={isPlaying ? faPause: faPlay} size="2x"></FontAwesomeIcon>
                <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight}></FontAwesomeIcon>
            </div>
            
        </div>
        
    )
} 

export default Player;
