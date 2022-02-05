import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "pages";
import { NavBar } from "components";
import { GlobalStyle } from "GlobalStyles/styles";

export default class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route exact path="/" component={CoinList} />
              <Route exact path="/coin/:coinId" component={CoinPage} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </Router>
      </>
    );
  }
}
