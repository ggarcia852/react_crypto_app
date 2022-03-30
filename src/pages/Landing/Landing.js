import React from "react";
import { CoinData, BitcoinChartData } from "components";
import { Container } from "./styles";

const Landing = (props) => {
  return (
    <Container>
      <BitcoinChartData currency={props.currency} />
      <CoinData currency={props.currency} />
    </Container>
  );
}

export default Landing;