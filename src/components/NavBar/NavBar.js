import React from "react";
import SearchBar from "components/SearchBar";
import { CurrencySelector } from "components";
import theme from "assets/theme.svg";
import {
  StyledNavDiv,
  StyledLinks,
  StyledLink,
  StyledNavList,
  StyledNavigation,
  StyledButton,
} from "./styles";

export default class NavBar extends React.Component {
  render() {
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
          <CurrencySelector handleCurrency={this.props.handleCurrency} />
          <StyledButton>
            <img src={theme} alt="theme" />
          </StyledButton>
        </StyledNavigation>
      </StyledNavDiv>
    );
  }
}
