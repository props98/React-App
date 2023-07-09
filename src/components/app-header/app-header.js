import React from "react";
import "./app-header.css";

const AppHeader = () => {
  const pseudo = 'Neo';
  return (
    <div className="app-header d-flex">
      <h1>Mr. Anderson (<span>{pseudo}</span>) </h1>
      <h2>5 posts, likes 0</h2>
    </div>
  )
}

export default AppHeader;