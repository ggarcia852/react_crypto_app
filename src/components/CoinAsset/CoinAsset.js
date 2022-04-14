import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCoinStats, resetAssets } from "store/portfolio/actions";
import pencil from "assets/pencil.svg";
import pencilLight from "assets/pencilLight.svg";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
import { RemoveNegative } from "../../utils";
import { StyledPricePercentArrow } from "components/CoinPageInfo/styles";
import {
  AssetContainer,
  CoinContainer,
  Container,
  EditContainer,
  EditImg,
  CoinHeading,
  StatisticHeading,
  ImgContainer,
  MarketContainer,
  Stat,
  StatsContainer,
  StyledImg,
  Green,
  ColoredSpan,
  StyledCoinLink,
} from "./styles";

const CoinAsset = (props) => {
  useEffect(() => {
    const assets = props.assets;
    props.resetAssets();
    assets.map((asset) => props.getCoinStats(asset));
    // eslint-disable-next-line
  }, [props.currency]);
  return (
    <>
      <Container>
        {props.assets?.length > 0 && (
          <StatisticHeading>Your Assets</StatisticHeading>
        )}
        {props.assets?.map((asset) => (
          <AssetContainer key={asset.id}>
            <CoinContainer>
              <ImgContainer>
                <StyledImg src={asset.thumb} alt="coin" />
              </ImgContainer>
              <CoinHeading>
                <StyledCoinLink to={`/coin/${asset.id}`}>
                  {asset.name} ({asset.symbol})
                </StyledCoinLink>
              </CoinHeading>
            </CoinContainer>
            <MarketContainer>
              <EditContainer>
                Coin Stats:{" "}
                {props.theme ? (
                  <EditImg src={pencil} alt="edit" />
                ) : (
                  <EditImg src={pencilLight} alt="edit" />
                )}{" "}
              </EditContainer>
              <StatsContainer>
                <Stat>
                  Coin amount: <Green>{asset.purchaseAmount}</Green>
                </Stat>
                <Stat>
                  Current value:{" "}
                  <Green>
                    ${(asset.purchaseAmount * asset.price).toFixed(2)}
                  </Green>
                </Stat>
                <Stat>
                  Total Gain/Loss:{" "}
                  <ColoredSpan
                    color={
                      (asset.price - asset.purchasePrice) *
                        asset.purchaseAmount >=
                      0
                        ? "#00FC2A"
                        : "#FE1040"
                    }
                  >
                    $
                    {(
                      (asset.price - asset.purchasePrice) *
                      asset.purchaseAmount
                    ).toFixed(2)}
                  </ColoredSpan>
                </Stat>
                <Stat>
                  Purchase date: <Green>{asset.date}</Green>
                </Stat>
              </StatsContainer>
              <div>Market Stats: </div>
              <StatsContainer>
                <Stat>
                  Current price:{" "}
                  <ColoredSpan
                    color={
                      asset.price >= asset.purchasePrice ? "#00FC2A" : "#FE1040"
                    }
                  >
                    ${asset.price}
                  </ColoredSpan>
                </Stat>
                <Stat>
                  Purchase Price:{" "}
                  <ColoredSpan
                    color={
                      asset.price < asset.purchasePrice ? "#00FC2A" : "#FE1040"
                    }
                  >
                    ${asset.purchasePrice.toFixed(2)}
                  </ColoredSpan>
                </Stat>
                <Stat>
                  Price change since purchase:{" "}
                  {(asset.price - asset.purchasePrice) / asset.purchasePrice >
                  0 ? (
                    <StyledPricePercentArrow src={greenUp} alt="up arrow" />
                  ) : (
                    <StyledPricePercentArrow src={redDown} alt="down arrow" />
                  )}
                  <ColoredSpan
                    color={
                      (asset.price - asset.purchasePrice) /
                        asset.purchasePrice >
                      0
                        ? "#00FC2A"
                        : "#FE1040"
                    }
                  >
                    {(
                      RemoveNegative(
                        (asset.price - asset.purchasePrice) /
                          asset.purchasePrice
                      ) * 100
                    ).toFixed(2)}{" "}
                    %
                  </ColoredSpan>
                </Stat>
                <Stat>
                  Price change 24h:{" "}
                  {asset.priceChange24 >= 0 ? (
                    <StyledPricePercentArrow src={greenUp} alt="up arrow" />
                  ) : (
                    <StyledPricePercentArrow src={redDown} alt="down arrow" />
                  )}
                  <ColoredSpan
                    color={asset.priceChange24 >= 0 ? "#00FC2A" : "#FE1040"}
                  >
                    {RemoveNegative(asset.priceChange24.toFixed(2))}%
                  </ColoredSpan>
                </Stat>

                {/* <Stat>
                  Volume/Market Cap:{" "}
                  <Green>
                    {((asset.volume / asset.marketCap) * 100).toFixed(2)}%
                  </Green>
                </Stat>
                <Stat>
                  Circulating/Max Supply:{" "}
                  <Green>
                    {(
                      (asset.circulatingSupply / asset.maxSupply) *
                      100
                    ).toFixed(2)}
                    %
                  </Green>
                </Stat> */}
              </StatsContainer>
            </MarketContainer>
          </AssetContainer>
        ))}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => ({
  assets: state.portfolio.assets,
  marketData: state.portfolio.marketData,
  theme: state.theme.darkTheme,
  currency: state.currency.currency,
});

const mapDispatchToProps = {
  resetAssets,
  getCoinStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinAsset);
