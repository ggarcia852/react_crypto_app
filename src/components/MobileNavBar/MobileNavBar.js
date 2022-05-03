import React from "react";
import { CurrencySelector } from "components";
import {
  Container,
  NavBarBottom,
  NavBarBottomBox,
  NavContainer,
  StyledInputImg,
  StyledLink,
} from "./styles";
import overview from "assets/overview.svg";
import portfolio from "assets/portfolio.svg";
import summary from "assets/summary.svg";
import searchNav from "assets/searchNav.svg";

export default function MobileNavBar() {
  return (
    <>
      <Container>
        <NavContainer>
          <div>Overview</div>
          <CurrencySelector />
        </NavContainer>
      </Container>
      <NavBarBottom>
        <NavBarBottomBox>
          <StyledLink exact to="/">
            <StyledInputImg type="image" src={overview} alt="" />
          </StyledLink>
          <StyledLink exact to="/portfolio">
            <StyledInputImg type="image" src={portfolio} alt="" />
          </StyledLink>
            <StyledInputImg type="image" src={summary} alt="" />
          <StyledLink exact to="/">
            <StyledInputImg type="image" src={searchNav} alt="" />
          </StyledLink>
        </NavBarBottomBox>
      </NavBarBottom>
    </>
  );
}
