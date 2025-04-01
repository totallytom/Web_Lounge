// RecommendedPosts.js
import React from 'react';
import './recommendedPost.css';

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <img src={post.image} alt={post.title} />
      <div className="post-info">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <div className="post-actions">
          <button>Like</button>
          <button>Comment</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

const RecommendedPosts = ({ posts }) => {
  return (
    <div className="recommended-posts">
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </div>
  );
};

export default RecommendedPosts;