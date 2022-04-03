import React from "react";
import { CoinsTable, BitcoinCharts } from "components";
import { Container } from "./styles";

const Landing = () => {
  return (
    <Container>
      <BitcoinCharts />
      <CoinsTable />
    </Container>
  );
};

export default Landing;
