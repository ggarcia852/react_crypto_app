import React from "react";
import { connect } from "react-redux";
import pencil from "assets/pencil.svg"
import {
  AssetContainer,
  CoinContainer,
  Container,
  EditContainer,
  EditImg,
  Heading,
  ImgContainer,
  MarketContainer,
  Stat,
  StatsContainer,
  StyledImg,
} from "./styles";

const CoinAsset = (props) => {
  return (
    <Container>
      {/* {props.assets && (
        <> */}
      {props.assets?.map((asset) => (
        <AssetContainer key={asset.id}>
          <div>
            <CoinContainer>
              <ImgContainer>
                <StyledImg src={asset.thumb} alt="coin" />
              </ImgContainer>
              <Heading>
                {asset.name} ({asset.symbol})
              </Heading>
            </CoinContainer>
          </div>
          <MarketContainer>
            <EditContainer>Your coin: <EditImg src={pencil} alt="edit" /> </EditContainer>
            <StatsContainer>
              <Stat>Coin amount: {asset.purchaseAmount}</Stat>
              <Stat>Amount value: $</Stat>
              <Stat>Price change since purchase: %</Stat>
              <Stat>Purchase date: {asset.date}</Stat>
            </StatsContainer>
            <div>Market price: </div>
            <StatsContainer>
              <Stat>Current price: $</Stat>
              <Stat>Price change 24h: %</Stat>
              <Stat>Volume/Market Cap: %</Stat>
              <Stat>Circulating/Max Supply: %</Stat>
            </StatsContainer>
          </MarketContainer>
        </AssetContainer>
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
