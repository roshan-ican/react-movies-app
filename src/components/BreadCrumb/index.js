import { Content, Wrapper } from "./BreadCrumb.styles";

import { Link } from "react-router-dom";
import React from "react";

const BreadCrumb = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span> | </span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
