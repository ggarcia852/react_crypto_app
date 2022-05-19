import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addAsset, getCoinStats, resetAssets } from "store/portfolio/actions";
import pencil from "assets/pencil.svg";
import pencilLight from "assets/pencilLight.svg";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
import redExit from "assets/redExit.svg";
import { RemoveNegative, CurrencyFormat } from "../../utils";
import {
  AssetContainer,
  CoinContainer,
  Container,
  EditContainer,
  StyledCoin,
  StatisticHeading,
  ImgContainer,
  MarketContainer,
  StatsContainer,
  StyledImg,
  ColoredSpan,
  StyledCoinLink,
  CoinHeading,
  StyledPercentImg
} from "./styles";

const CoinAsset = (props) => {
  useEffect(() => {
    const assets = props.assets;
    props.resetAssets();
    assets.map((asset) => props.getCoinStats(asset, asset.date));
    // eslint-disable-next-line
  }, [props.currency]);

  const formatDate = (date) => {
    const year = date.slice(-4);
    const month = date.slice(3, 5);
    const day = date.slice(0, 2);
    const newDate = `${month}-${day}-${year}`;
    return newDate;
  };

  const handleDelete = (asset) => {
    if (window.confirm("Permanently delete this asset?")) {
      const list = props.assets.filter(
        (element) =>
          element.id !== asset.id ||
          element.purchaseAmount !== asset.purchaseAmount ||
          element.date !== asset.date
      );
      props.resetAssets();
      const newList = list.map((asset) =>
        props.getCoinStats(asset, asset.date)
      );
      return newList;
    }
    return;
  };

  const handleEdit = (asset) => {
    console.log("edit", asset);
    // props.addAsset(true);
  };

  return (
    <>
      {props.assets?.length > 0 && (
        <StatisticHeading>Your Assets</StatisticHeading>
      )}
      <Container>
        {props.assets?.map((asset) => (
          <AssetContainer key={asset.id + Math.random()}>
            <CoinContainer>
              <ImgContainer>
                <StyledImg src={asset.large} alt="coin" />
              </ImgContainer>
              <StyledCoin>
                <StyledCoinLink to={`/coin/${asset.id}`}>
                  {asset.name} ({asset.symbol})
                </StyledCoinLink>
              </StyledCoin>
              <input
                type="image"
                alt="delete"
                src={redExit}
                width="15vw"
                onClick={() => handleDelete(asset)}
              />
            </CoinContainer>
            <MarketContainer>
              <EditContainer>
                <CoinHeading>Coin Stats:</CoinHeading>
                {props.theme ? (
                  <input
                  disabled
                    type="image"
                    src={pencil}
                    alt="edit"
                    width="25vw"
                    onClick={() => handleEdit(asset)}
                  />
                ) : (
                  <input
                    type="image"
                    src={pencilLight}
                    alt="edit"
                    width="25vw"
                    onClick={() => handleEdit(asset)}
                  />
                )}{" "}
              </EditContainer>
              <StatsContainer>
                <div>Coin Amount: {asset.purchaseAmount}</div>
                <div>
                  Total Value: $
                  {CurrencyFormat(asset.purchaseAmount * asset.price)}
                </div>
                <div>
                  Total Gain/Loss:{" "}
                  <ColoredSpan
                    color={
                      asset.purchaseAmount * asset.price -
                        asset.purchaseAmount * asset.purchasePrice >=
                      0
                        ? "#00FC2A"
                        : "#FE1040"
                    }
                  >
                    $
                    {CurrencyFormat(
                      asset.purchaseAmount * asset.price -
                        asset.purchaseAmount * asset.purchasePrice
                    )}
                  </ColoredSpan>
                </div>
                <div>Purchase Date: {formatDate(asset.date)}</div>
              </StatsContainer>
              <CoinHeading>Market Stats: </CoinHeading>
              <StatsContainer>
                <div>Current Price: ${CurrencyFormat(asset.price)}</div>
                <div>
                  Purchase Price: ${CurrencyFormat(asset.purchasePrice)}
                </div>
                <div>
                  Net Gain/Loss:{" "}
                  {(asset.price - asset.purchasePrice) / asset.purchasePrice >
                  0 ? (
                    <StyledPercentImg src={greenUp} alt="up arrow" />
                  ) : (
                    <StyledPercentImg src={redDown} alt="down arrow" />
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
                </div>
                <div>
                  Price Change 24h:{" "}
                  {asset.priceChange24 >= 0 ? (
                    <StyledPercentImg src={greenUp} alt="up arrow" />
                  ) : (
                    <StyledPercentImg src={redDown} alt="down arrow" />
                  )}
                  <ColoredSpan
                    color={asset.priceChange24 >= 0 ? "#00FC2A" : "#FE1040"}
                  >
                    {RemoveNegative(asset.priceChange24?.toFixed(2))}%
                  </ColoredSpan>
                </div>
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
  addAsset,
  resetAssets,
  getCoinStats,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinAsset);
