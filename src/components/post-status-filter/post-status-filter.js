import React from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
  return (
    <div className="btn-group">
      <Button color="primary">All</Button>
      <Button outline color="danger">Likes</Button>
      {/* <button className="btn btn-primary">All</button> */}
      {/* <button className="btn btn-outline-secondary">Likes</button> */}
    </div>
  )
}

export default PostStatusFilter;