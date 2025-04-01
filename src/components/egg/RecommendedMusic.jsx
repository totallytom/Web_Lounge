// RecommendedMusic.js
import React from 'react';
import './recommendedMusic.css';

const MusicCard = ({ music }) => {
  return (
    <div className="music-card">
      <img src={music.image} alt={music.title} />
      <div className="music-info">
        <h2>{music.title}</h2>
        <p>{music.artist}</p>
        <p>{music.album}</p>
      </div>
      <button>Play</button>
    </div>
  );
};

const RecommendedMusic = ({ music }) => {
  return (
    <div className="recommended-music">
      {music.map((music, index) => (
        <MusicCard key={index} music={music} />
      ))}
    </div>
  );
};

export default RecommendedMusic;