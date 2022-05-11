import React from "react";
import Media from "react-media";
import {
  CurrencySelector,
  SearchBar,
  MobileNavBar,
  ThemeSelector,
} from "components";
import {
  StyledNav,
  StyledLink,
  StyledNavLinks,
  StyledNavOptions,
  NavContainer,
} from "./styles";

const NavBar = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
          <MobileNavBar />
        ) : (
          <NavContainer>
            <StyledNav>
              <StyledNavLinks>
                <StyledLink exact to="/" activeClassName="active">
                  Coins
                </StyledLink>
                <StyledLink exact to="/portfolio" activeClassName="active">
                  Portfolio
                </StyledLink>
              </StyledNavLinks>
              <StyledNavOptions>
                <SearchBar />
                <CurrencySelector handleCurrency={props.handleCurrency} />
                <ThemeSelector />
              </StyledNavOptions>
            </StyledNav>
          </NavContainer>
        )
      }
    </Media>
  );
};

export default NavBar;
