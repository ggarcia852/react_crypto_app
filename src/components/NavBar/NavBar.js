import React from "react";
import SearchBar from "components/SearchBar";
import {
  StyledNavDiv,
  StyledLinks,
  StyledLink,
  StyledNavList,
  StyledNavigation,
  StyledButton,
} from "./styles";
import CurrencySelector from "components/CurrencySelector/CurrencySelector";

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
          <StyledButton />
        </StyledNavigation>
      </StyledNavDiv>
    );
  }
}
