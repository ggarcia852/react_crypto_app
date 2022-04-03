import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinPage, Landing, Portfolio } from "pages";
import { NavBar, GlobalDataBar } from "components";
import { Container, GlobalStyle } from "GlobalStyles/styles";

const App = () => {
  return (
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
  );
};

export default App;
