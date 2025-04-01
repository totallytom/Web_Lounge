import React from 'react';
import RecommendedPosts from './RecommendedPost.jsx';
import RecommendedMusic from './RecommendedMusic.jsx';
import './eggers.css';

const Eggers = () => {
  const posts = [
    { title: 'Post 1', description: 'Description 1', image: 'post-image1.jpg' },
    { title: 'Post 2', description: 'Description 2', image: 'post-image2.jpg' },
    { title: 'Post 3', description: 'Description 3', image: 'post-image3.jpg' },
    { title: 'Post 4', description: 'Description 4', image: 'post-image4.jpg' },
    { title: 'Post 5', description: 'Description 5', image: 'post-image5.jpg' },
    { title: 'Post 6', description: 'Description 6', image: 'post-image6.jpg' },
    // ...
  ];

  const music = [
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1', image: 'music-image1.jpg' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2', image: 'music-image2.jpg' },
    { title: 'Song 3', artist: 'Artist 3', album: 'Album 3', image: 'music-image3.jpg' },
    { title: 'Song 4', artist: 'Artist 4', album: 'Album 4', image: 'music-image4.jpg' },
    { title: 'Song 5', artist: 'Artist 5', album: 'Album 5', image: 'music-image5.jpg' },
    { title: 'Song 6', artist: 'Artist 6', album: 'Album 6', image: 'music-image6.jpg' },
    // ...
  ];

  return (
    <div className="egg-container">
        <h2>Posts</h2>
        <RecommendedPosts posts={posts} />
        <h2>Music</h2>
        <RecommendedMusic music={music} />
    </div>
  )
}

export default Eggers
