import React from "react";
import Media from "react-media";
import { CoinsTable, BitcoinCharts, MobileBitcoinCharts } from "components";
import { Container } from "./styles";

const Landing = () => {
  return (
    <Container>
      <Media queries={{ small: { maxWidth: 599 } }}>
        {(matches) =>
          matches.small ? <MobileBitcoinCharts /> : <BitcoinCharts />
        }
      </Media>
      <CoinsTable />
    </Container>
  );
};

export default Landing;
