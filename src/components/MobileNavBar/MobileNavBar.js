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
import overviewGreen from "assets/overviewGreen.svg";
import portfolio from "assets/portfolio.svg";
import portfolioGreen from "assets/portfolioGreen.svg";
import summary from "assets/summary.svg";
import searchNav from "assets/searchNav.svg";
import searchNavGreen from "assets/searchNavGreen.svg";

export default function MobileNavBar() {
  const [active, setActive] = useState("overview");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = (e) => {
    setShowSearch(true);
    setActive("search");
  };

  const handleNavClick = (e) => {
    setActive(e);
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
            <StyledInputImg
              type="image"
              src={active === "overview" ? overviewGreen : overview}
              alt="overview"
              onClick={(e) => handleNavClick("overview")}
            />
          </StyledLink>
          <StyledLink exact to="/portfolio">
            <StyledInputImg
              type="image"
              src={active === "portfolio" ? portfolioGreen : portfolio}
              alt="portfolio"
              onClick={(e) => handleNavClick("portfolio")}
            />
          </StyledLink>
          <StyledInputImg type="image" src={summary} alt="summary" />
          <StyledInputImg
            type="image"
            src={active === "search" ? searchNavGreen : searchNav}
            alt="search"
            onClick={handleSearchClick}
          />
        </NavBarBottomBox>
      </NavBarBottom>
    </>
  );
}
