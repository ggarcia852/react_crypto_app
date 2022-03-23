import React from "react";
import { GlobalData, CoinData, BitcoinChartData } from "components";
import { Container } from "./styles";

const Landing = (props) => {
  return (
    <Container>
      <GlobalData currency={props.currency} />
      <BitcoinChartData currency={props.currency} />
      <CoinData currency={props.currency} />
    </Container>
  );
}

export default Landing;