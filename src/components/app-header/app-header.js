import React from "react";
import styled from "styled-components";

import "./app-header.css";

const Header = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  h1 {
    font-size: 26px;
    color: ${(props) => (props.colored ? "red" : "black")};
    :hover {
      color: blue;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`;

const AppHeader = ({ liked, allPosts }) => {
  return (
    <Header>
      <h1>Denys Chebotar</h1>
      <h2>
        {allPosts} posts, liked {liked}
      </h2>
    </Header>
  );
};

export default AppHeader;
