import React from "react";
import { CoinsTable, BitcoinCharts } from "components";
import { Container } from "./styles";

const Landing = (props) => {
  return (
    <Container>
      <BitcoinCharts currency={props.currency} />
      <CoinsTable currency={props.currency} />
    </Container>
  );
}

export default Landing;