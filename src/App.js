import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "pages";
import { NavBar } from "components";
import { Container, GlobalStyle } from "GlobalStyles/styles";

const App = () => {
  const [currency, setCurrency] = useState("usd");

  const handleCurrency = (currency) => {
    setCurrency(currency);
  };

  return (
    <Container>
      <GlobalStyle />
      <Router>
        <div>
          <NavBar handleCurrency={handleCurrency} />
          <Switch>
            <Route exact path="/">
              <CoinList currency={currency} />
            </Route>
            <Route
              exact
              path="/coin/:coinId"
              render={(props) => <CoinPage {...props} currency={currency} />}
            />
            <Route exact path="/portfolio">
              <Portfolio currency={currency} />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
};

export default App;
