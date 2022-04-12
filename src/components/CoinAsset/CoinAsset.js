import React from "react";
import { connect } from "react-redux";
import { Container } from "./styles";

const CoinAsset = (props) => {
  return (
    <Container>
      {/* {props.assets && (
        <> */}
          {props.assets?.map((asset) => (
            <div key={asset.id}>
              <div>
                <img src={asset.thumb} alt="coin" />
                <div>{asset.name} ({asset.symbol})</div>
              </div>
              <div>
                <div>Your coin: </div>
                <div>
                  <span>Coin amount: {asset.purchaseAmount}</span>
                  <span>Amount value: $</span>
                  <span>Price change since purchase: %</span>
                  <span>Purchase date: {asset.date}</span>
                </div>
                <div>Market price: </div>
                <div>
                  <span>Current price: $</span>
                  <span>Price change 24h: %</span>
                  <span>Volume/Market Cap: %</span>
                  <span>Circulating/Max Supply: %</span>
                </div>
              </div>
            </div>
          ))}
        {/* </>
      )} */}
    </Container>
  );
};

const mapStateToProps = (state) => ({
  assets: state.portfolio.assets,
});

export default connect(mapStateToProps)(CoinAsset);
