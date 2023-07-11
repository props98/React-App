import React from "react";
import "./app-header.css";
import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'tomato' : 'black'};
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = () => {
  const pseudo = 'Neo';
  return (
    <Header as="a">
      <h1>Mr. Anderson (<span>{pseudo}</span>) </h1>
      <h2>5 posts, likes 0</h2>
    </Header>
  )
}

export default AppHeader;