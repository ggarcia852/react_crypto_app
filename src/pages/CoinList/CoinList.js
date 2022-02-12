import React from "react";
import { GlobalData, CoinData, MarketChartData } from "components";
import { Container } from "./styles";


export default class CoinList extends React.Component {
  render() {
    return (
      <Container>
        <GlobalData />
        <MarketChartData />
        <CoinData />
      </Container>
    );
  }
}
