import React, { Component } from "react";
import currency from "assets/currency.svg";
import { StyledBackground, StyledContainer, StyledDropdown } from "./styles";
import { StyledImg } from "components/CoinData/styles";
import { StyledBar } from "components/MarketChartData/styles";

export default class CurrencySelector extends Component {
  state = {
    currency: "usd",
  };

  handleSelect = (e) => {
    this.setState({ currency: e.target.value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency) {
      this.props.handleCurrency(this.state.currency);
    }
  }

  render() {
    return (
      <StyledContainer>
        <StyledBackground>
          <StyledImg src={currency} alt="currency" />
        </StyledBackground>
        <StyledDropdown onChange={this.handleSelect}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
          <option value="btc">BTC</option>
          <option value="eth">ETH</option>
        </StyledDropdown>
      </StyledContainer>
    );
  }
}
