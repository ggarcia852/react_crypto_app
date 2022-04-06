import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "GlobalStyles/styles";
import { CoinPage, Landing, Portfolio } from "pages";
import { NavBar, GlobalDataBar } from "components";
import { Container, GlobalStyle } from "GlobalStyles/styles";

const App = () => {
  const [darkThemeOn, setDarkThemeOn] = useState(true)

  const handleTheme = () => {
    setDarkThemeOn(!darkThemeOn)
  }

  return (
    <ThemeProvider theme={darkThemeOn ? darkTheme : lightTheme}>
      <Container>
        <GlobalStyle />
        <Router>
          <NavBar handleTheme={handleTheme} theme={darkThemeOn} />
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

export default App;
