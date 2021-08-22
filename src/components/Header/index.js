import { Content, LogoImg, TMDBLogoImg, Wrapper } from "./Header.style";

import RMDBLogo from "../../images/react-movie-logo.svg";
import React from "react";
import TMDBLogo from "../../images/tmdb_logo.svg";

const Header = () => (
  <Wrapper>
    <Content>
      <LogoImg src={RMDBLogo} alt="rmdb-logo" />
      <TMDBLogoImg src={TMDBLogo} alt="tmdb-log" />
    </Content>
  </Wrapper>
);

export default Header;
