import { Content, LogoImg, TMDBLogoImg, Wrapper } from "./Header.style";

import { Link } from "react-router-dom";

import RMDBLogo from "../../images/react-movie-logo.svg";
import React from "react";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-log" />
    </Content>
  </Wrapper>
);

export default Header;
