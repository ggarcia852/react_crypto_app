import React, { useState } from "react";
import { connect } from "react-redux";
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
import overviewLight from "assets/overviewLight.svg";
import portfolio from "assets/portfolio.svg";
import portfolioLight from "assets/portfolioLight.svg";
import summary from "assets/summary.svg";
import summaryLight from "assets/summaryLight.svg";
import searchNav from "assets/searchNav.svg";
import searchNavLight from "assets/searchNavLight.svg";

const  MobileNavBar = (props) => {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = (e) => {
    setShowSearch(true);
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
            <StyledInputImg type="image" src={props.theme ? overview : overviewLight} alt="overview" />
          </StyledLink>
          <StyledLink exact to="/portfolio">
            <StyledInputImg type="image" src={props.theme ? portfolio: portfolioLight} alt="portfolio" />
          </StyledLink>
          <StyledInputImg type="image" src={props.theme ? summary : summaryLight} alt="summary" />
          <StyledInputImg
            type="image"
            src={props.theme ? searchNav : searchNavLight}
            alt="search"
            onClick={handleClick}
          />
        </NavBarBottomContainer>
      </NavBarBottomWrapper>
    </>
  );
}

const mapStateToProps = (state) => ({
  theme: state.theme.darkTheme,
});

export default connect(mapStateToProps)(MobileNavBar);
