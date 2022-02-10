import React from "react";
import SearchBar from "components/SearchBar";
import {
  StyledNavDiv,
  StyledLinks,
  StyledLink,
  StyledNavList,
  StyledDropdown,
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
          <StyledDropdown />
          <StyledButton />
        </StyledNavigation>
      </StyledNavDiv>
    );
  }
}
