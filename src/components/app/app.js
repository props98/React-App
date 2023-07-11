import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter'
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import './index.css';

const App = () => {

  const data = [
    {label: 'Hello, Neo!', important: true, id: 'sdf'},
    {label: 'Follow the white rabbit.', important: false, id: 'awe'},
    {label: 'You are the chosen one.', important: false, id: 'gsdfg'}
  ];

  return (
    <div className="app">
      <AppHeader/>
      <div className="search-panel d-flex">
        <SearchPanel/>
        <PostStatusFilter/>
      </div>
      <PostList posts={data} />
      <PostAddForm/>
    </div>
  )
}

export default App;