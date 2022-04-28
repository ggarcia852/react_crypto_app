import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "GlobalStyles/styles";
import { CoinPage, Landing, Portfolio } from "pages";
import { NavBar, GlobalDataBar } from "components";
import { Container, GlobalStyle } from "GlobalStyles/styles";

const App = (props) => {
  return (
    <ThemeProvider theme={props.theme ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Router>
          <NavBar />
          <GlobalDataBar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/coin/:coinId" component={CoinPage} />
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

const mapStateToProps = (state) => ({
  theme: state.theme.darkTheme,
});

export default connect(mapStateToProps)(App);
