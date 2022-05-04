import React, { useState } from "react";
import { CurrencySelector, MobileSearch, ThemeSelector } from "components";
import {
  Container,
  NavBarBottom,
  NavBarBottomBox,
  NavContainer,
  StyledInputImg,
  StyledLink,
  StyledRightNav,
} from "./styles";
import overview from "assets/overview.svg";
import portfolio from "assets/portfolio.svg";
import summary from "assets/summary.svg";
import searchNav from "assets/searchNav.svg";

export default function MobileNavBar() {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = (e) => {
    setShowSearch(true);
  };
  return (
    <>
      <Container>
        <NavContainer>
          <div>Overview</div>
          <StyledRightNav>
            <CurrencySelector />
            <ThemeSelector />
          </StyledRightNav>
        </NavContainer>
        {showSearch && <MobileSearch showSearch={setShowSearch} />}
      </Container>
      <NavBarBottom>
        <NavBarBottomBox>
          <StyledLink exact to="/">
            <StyledInputImg type="image" src={overview} alt="overview" />
          </StyledLink>
          <StyledLink exact to="/portfolio">
            <StyledInputImg type="image" src={portfolio} alt="portfolio" />
          </StyledLink>
          <StyledInputImg type="image" src={summary} alt="summary" />
          <StyledInputImg
            type="image"
            src={searchNav}
            alt="search"
            onClick={handleClick}
          />
        </NavBarBottomBox>
      </NavBarBottom>
    </>
  );
}
