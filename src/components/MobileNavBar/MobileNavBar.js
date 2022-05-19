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
import portfolio from "assets/portfolio.svg";
import portfolioGreen from "assets/portfolioGreen.svg";
import summary from "assets/summary.svg";
import summaryGreen from "assets/summaryGreen.svg";
import searchNav from "assets/searchNav.svg";
import searchNavGreen from "assets/searchNavGreen.svg";

const  MobileNavBar = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleSearchClick = () => {
    const currentNav = props.active;
    setShowSearch(true);
    props.setActiveNav("search", currentNav);
  };

  const handleNavClick = (activeButton) => {
    props.setActiveNav(activeButton);
  };

  return (
    <>
      <Wrapper>
        <NavContainer>
          <div>Overview</div>
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
              src={props.active === "overview" ? overviewGreen : overview}
              alt="overview"
              onClick={(e) => handleNavClick("overview")}
            />
          </StyledLink>
          <StyledLink exact to="/portfolio">
            <StyledInputImg
              type="image"
              src={props.active === "portfolio" ? portfolioGreen : portfolio}
              alt="portfolio"
              onClick={(e) => handleNavClick("portfolio")}
            />
          </StyledLink>
          <StyledInputImg
            type="image"
            src={props.active === "summary" ? summaryGreen : summary}
            alt="summary"
          />
          <StyledInputImg
            type="image"
            src={props.active === "search" ? searchNavGreen : searchNav}
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

export default connect(mapStateToProps)(MobileNavBar);
