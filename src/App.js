import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CoinList, CoinPage, Portfolio } from "pages";
import { NavBar } from "components";
import { Container, GlobalStyle } from "GlobalStyles/styles";

export default class App extends React.Component {

  state = {
    currency: "usd"
  }

  handleCurrency = (currency) => {
    const newCurrency = currency
    console.log(newCurrency)
    this.setState({ currency: newCurrency })
  }


  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.currency !== prevState.currency) {
      this.handleCurrency();
    }
  }

  // componentDidMount = () => {
  //   this.handleCurrency()
  // }

  render() {
    console.log("app", this.state.currency)
    return (
      <Container>
        <GlobalStyle />
        <Router>
          <div>
            <NavBar handleCurrency={this.handleCurrency} />
            <Switch>
              <Route exact path="/"><CoinList currency={this.state.currency} /></Route>
              <Route exact path="/coin/:coinId" component={CoinPage} />
              <Route path="/portfolio" component={Portfolio} />
            </Switch>
          </div>
        </Router>
      </Container>
    );
  }
}
