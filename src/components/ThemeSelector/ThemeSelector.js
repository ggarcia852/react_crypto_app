import React from "react";
import { connect } from "react-redux";
import { changeTheme } from "store/theme/actions";
import theme from "assets/theme.svg";
import themeLight from "assets/themeLight.svg";
import { StyledThemeButton, StyledImg } from "./styles";

const ThemeSelector = (props) => {
  return (
    <StyledThemeButton onClick={(e) => props.changeTheme(props.theme)}>
      <StyledImg src={props.theme ? theme : themeLight} alt="theme" />
    </StyledThemeButton>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  changeTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ThemeSelector);
