import React from "react";
import SearchBar from "components/SearchBar";
import { CurrencySelector } from "components";
import theme from "assets/theme.svg";
import themeLight from "assets/themeLight.svg";
import {
  StyledNavDiv,
  StyledLinks,
  StyledLink,
  StyledNavList,
  StyledNavigation,
  StyledButton,
} from "./styles";

const NavBar = (props) => {
  const handleTheme = () => {
    props.handleTheme()
  }
  return (
    <StyledNavDiv>
      <StyledLinks>
        <StyledNavList>
          <li>
            <StyledLink exact to="/" activeClassName="active">
              Coins
            </StyledLink>
          </li>
          <li>
            <StyledLink exact to="/portfolio" activeClassName="active">
              Portfolio
            </StyledLink>
          </li>
        </StyledNavList>
      </StyledLinks>
      <StyledNavigation>
        <SearchBar />
        <CurrencySelector handleCurrency={props.handleCurrency} />
        <StyledButton onClick={handleTheme}>
          {props.darkThemeOn ? <img src={theme} alt="theme" /> : <img src={themeLight} alt="theme" />}
        </StyledButton>
      </StyledNavigation>
    </StyledNavDiv>
  );
};

export default NavBar;