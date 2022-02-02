import React from "react";
import { GlobalData, CoinData, MarketChartData } from "components";


export default class CoinList extends React.Component {
  render() {
    return (
      <>
        <GlobalData />
        <MarketChartData />
        <CoinData />
      </>
    );
  }
}
