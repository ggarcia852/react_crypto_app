import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "store/theme/actions";
import { CurrencySelector } from "components";
import SearchBar from "components/SearchBar";
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
        <StyledButton onClick={(e) => props.changeTheme(props.theme)}>
          <img src={props.theme ? theme : themeLight} alt="theme" />
        </StyledButton>
      </StyledNavigation>
    </StyledNavDiv>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
