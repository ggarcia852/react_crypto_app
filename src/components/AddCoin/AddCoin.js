import React from "react";
import { CoinContainer, Container } from "./styles";

export default function AddCoin() {
  return (
    <Container>
      <div>
        <div>Select Coin</div>
      </div>
      <CoinContainer>
        <div>
          <div>instructions</div>
          <div>coin.image</div>
          <div>coin.name (coin.symbol)</div>
        </div>
        <div>
          <div>
            <input placeholder="Coin Name" />
          </div>
          <div>
            <input placeholder="Purchase Amount" />
          </div>
          <div>
            <input placeholder="Purchase Date" />
          </div>
        </div>
      </CoinContainer>
      <div>
        <div>
          <button>Close</button>
          <button>Save Coin</button>
        </div>
      </div>
    </Container>
  );
}
