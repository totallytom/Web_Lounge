import React, { useEffect, useRef } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();

    // Wait for the music to finish
    audio.addEventListener("ended", () => {
      // Do something when the music finishes
    });

    return () => {
      // Clean up the event listener
      audio.removeEventListener("ended", () => {});
    };
  }, []);

  return (
    <audio ref={audioRef} src="path/to/your/music/file.mp3" controls></audio>
  );
}

export default MusicPlayer;