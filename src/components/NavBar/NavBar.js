import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "store/theme/actions";
import { CurrencySelector } from "components";
import SearchBar from "components/SearchBar";
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

const mobileNav = <div>THis is the mobile nav</div>

const mql = window.matchMedia('(max-width: 600px)');

let mobileView = mql.matches;
console.log(mobileView)

// if (mobileView) {
//   setNavInnerHTML(Component1);
// } else {
//   setNavInnerHTML(Component2);
// }

const NavBar = (props) => {
  return (
    <NavContainer>
      {mobileView && mobileNav}
      <StyledNav>
          <StyledNavLinks>
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
          </StyledNavLinks>
        <StyledNavOptions>
          <SearchBar />
          <CurrencySelector handleCurrency={props.handleCurrency} />
          <StyledThemeButton onClick={(e) => props.changeTheme(props.theme)}>
            <StyledImg src={props.theme ? theme : themeLight} alt="theme" />
          </StyledThemeButton>
        </StyledNavOptions>
      </StyledNav>
    </NavContainer>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
