import React from "react";
import { Container } from "./styles";

export default function CoinAsset() {
  return (
    <Container>
      <div>
        <div>coin.image</div>
        <div>coin.name (coin.symbol)</div>
      </div>
      <div>
        <div>Your coin: </div>
        <div>
          <span>Coin amount: </span>
          <span>Amount value: $</span>
          <span>Price change since purchase: %</span>
          <span>Purchase date: </span>
        </div>
        <div>Market price: </div>
        <div>
          <span>Current price: $</span>
          <span>Price change 24h: %</span>
          <span>Volume/Market Cap: %</span>
          <span>Circulating/Max Supply: %</span>
        </div>
      </div>
    </Container>
  );
}
