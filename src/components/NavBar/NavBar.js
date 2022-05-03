import React from "react";
import Media from "react-media";
import { connect } from "react-redux";
import { changeTheme } from "store/theme/actions";
import { CurrencySelector, SearchBar, MobileNavBar } from "components";
import theme from "assets/theme.svg";
import themeLight from "assets/themeLight.svg";
import {
  StyledNav,
  StyledLink,
  StyledNavLinks,
  StyledNavOptions,
  StyledThemeButton,
  NavContainer,
  StyledImg,
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
                <StyledThemeButton
                  onClick={(e) => props.changeTheme(props.theme)}
                >
                  <StyledImg
                    src={props.theme ? theme : themeLight}
                    alt="theme"
                  />
                </StyledThemeButton>
              </StyledNavOptions>
            </StyledNav>
          </NavContainer>
        )
      }
    </Media>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
