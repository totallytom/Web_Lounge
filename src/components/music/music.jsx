import './music.css'
import { useEffect, useRef, useState } from "react";
import image from '../../assets/DINO.png';
import { PlayArrow, Pause } from "@mui/icons-material";

const musicpage = ({audioSrc}) => {
    //state variables to manage the player's status and current time. 
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration,setDuration] = useState(0);

    const audioRef = useRef(null);

    //function to seek a specific time in the audio.
    const handleSeek = (e) => {
        audioRef.current.currentTime = e.target.value;
        setCurrentTime(e.target.value);
    };

    //function to update the current time and duration of the audio.
    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
        setDuration(audioRef.current.duration);
    };

    //function to handle audio playback.
    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    //function to handle audio pause.
    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    //function to play or pause the audio.
    const handlePlayPause = () => {
        if (isPlaying) {
            handlePause();
        } else {
            handlePlay();
        }
    };

    //function to format the duration of the audio in mmss format.
    function formatDuration(durationSeconds) {
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedSeconds = seconds.toString().padStart(2,"0");
        return `${minutes}:${formattedSeconds}`;
    }

    //Use an effect to listen for 'timeupdate' events from the audio element and update.
    useEffect(() => {
        audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
        return () => {
            audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        };
    }, []);


  return (
    <div className="player-card">
        <img src={image} alt="" />
        
        <input
        type="range"
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
        />

        <audio ref={audioRef} src={audioSrc} />

        <div className="track-duration">
            <p>{formatDuration(currentTime)} </p>
            <p>{formatDuration(duration)}</p>
        </div>

        <button onClick={handlePlayPause}>
            <span class="material-symbols-rounded">
                {isPlaying ? <Pause /> : <PlayArrow />}
            </span>
        </button>
    </div>

  )
}

export default musicpage
