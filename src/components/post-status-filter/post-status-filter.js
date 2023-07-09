import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-primary">All</button>
      <button className="btn btn-outline-secondary">Likes</button>
    </div>
  )
}

export default PostStatusFilter;