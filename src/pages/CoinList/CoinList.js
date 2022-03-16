import React from "react";
import { GlobalData, CoinData, BitcoinChartData } from "components";
import { Container } from "./styles";


export default class CoinList extends React.Component {
  render() {
    return (
      <Container>
        <GlobalData currency={this.props.currency} />
        <BitcoinChartData currency={this.props.currency} />
        <CoinData currency={this.props.currency} />
      </Container>
    );
  }
}
