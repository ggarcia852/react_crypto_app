import React from "react";
import { GlobalData, CoinData } from "components";

export default class CoinList extends React.Component {
  render() {
    return (
      <>
        <GlobalData />
        <CoinData />
      </>
    );
  }
}
