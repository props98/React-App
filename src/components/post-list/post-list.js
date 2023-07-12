import React from 'react';
import PostListItem from '../post-list-item';
import { ListGroup } from 'reactstrap';
import './post-list.css';

const PostList = ({posts, onDelete}) => {

  const elements = posts.map((item) => {

    const {id, ...itemProps} = item;

    return (
      <li key={id} className="list-group-item">
        {/* Cтарая запись */}
        {/* <PostListItem
          label={itemProps.label}
          important={itemProps.important} /> */}

        {/* Простая запись, новый синитаксис  */}
        <PostListItem {...itemProps}
        onDelete={() => {
          onDelete(id);
        }}/> 
      </li>
    )
  });

  return (
    <ListGroup className="app-list">
      {/*!! Так делать не надо  !!*/}
      {/* <PostListItem label={posts[0].label} important={posts[0].important}/> */}

      {/* <PostListItem label="Hello, Neo!" important />
      <PostListItem label="Follow the white rabbit." />
      <PostListItem label="You are the chosen one." /> */}

      {elements}
    </ListGroup>
  )
}

export default PostList;