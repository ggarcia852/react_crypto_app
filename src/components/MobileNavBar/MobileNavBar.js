import React, { useState } from "react";
import { connect } from "react-redux";
import { setActiveNav } from "store/mobileNav/actions";
import { CurrencySelector, MobileSearch, ThemeSelector } from "components";
import {
  Wrapper,
  NavBarBottomWrapper,
  NavBarBottomContainer,
  NavContainer,
  StyledInputImg,
  StyledLink,
  StyledRightNav,
} from "./styles";
import overview from "assets/overview.svg";
import overviewGreen from "assets/overviewGreen.svg";
import overviewLight from "assets/overviewLight.svg";
import portfolio from "assets/portfolio.svg";
import portfolioGreen from "assets/portfolioGreen.svg";
import portfolioLight from "assets/portfolioLight.svg";
import summary from "assets/summary.svg";
import summaryGreen from "assets/summaryGreen.svg";
import summaryLight from "assets/summaryLight.svg";
import searchNav from "assets/searchNav.svg";
import searchNavGreen from "assets/searchNavGreen.svg";
import searchNavLight from "assets/searchNavLight.svg";

const MobileNavBar = (props) => {
  const [showSearch, setShowSearch] = useState(false);
  // const [pageTitle, setPageTitle] = useState("Overviewzzzz")

  const handleSearchClick = () => {
    const currentNav = props.active;
    setShowSearch(true);
    props.setActiveNav("Search", currentNav);
  };

  const handleNavClick = (activeButton) => {
    props.setActiveNav(activeButton);
  };

  return (
    <>
      <Wrapper>
        <NavContainer>
          <div>{props.active}</div>
          <StyledRightNav>
            <CurrencySelector />
            <ThemeSelector />
          </StyledRightNav>
        </NavContainer>
        {showSearch && <MobileSearch showSearch={setShowSearch} />}
      </Wrapper>
      <NavBarBottomWrapper>
        <NavBarBottomContainer>
          <StyledLink exact to="/">
            <StyledInputImg
              type="image"
              src={
                props.active === "Overview"
                  ? overviewGreen
                  : props.theme
                  ? overview
                  : overviewLight
              }
              alt="overview"
              onClick={(e) => handleNavClick("Overview")}
            />
          </StyledLink>
          <StyledLink exact to="/portfolio">
            <StyledInputImg
              type="image"
              src={
                props.active === "Portfolio"
                  ? portfolioGreen
                  : props.theme
                  ? portfolio
                  : portfolioLight
              }
              alt="portfolio"
              onClick={(e) => handleNavClick("Portfolio")}
            />
          </StyledLink>
          <StyledInputImg
            type="image"
            src={
              props.active === "Summary"
                ? summaryGreen
                : props.theme
                ? summary
                : summaryLight
            }
            alt="summary"
          />
          <StyledInputImg
            type="image"
            src={
              props.active === "Search"
                ? searchNavGreen
                : props.theme
                ? searchNav
                : searchNavLight
            }
            alt="search"
            onClick={handleSearchClick}
          />
        </NavBarBottomContainer>
      </NavBarBottomWrapper>
    </>
  );
};

const mapStateToProps = (state) => ({
  active: state.mobileNav.active,
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  setActiveNav,
};

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavBar);
