import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addAsset, getCoinStats, resetAssets } from "store/portfolio/actions";
import pencil from "assets/pencil.svg";
import pencilLight from "assets/pencilLight.svg";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
import redExit from "assets/redExit.svg";
import { RemoveNegative, CurrencyFormat } from "../../utils";
import { StyledPricePercentArrow } from "components/CoinPageInfo/styles";
import {
  AssetContainer,
  CoinContainer,
  Container,
  EditContainer,
  StyledCoin,
  StatisticHeading,
  ImgContainer,
  MarketContainer,
  Stat,
  StatsContainer,
  StyledImg,
  ColoredSpan,
  StyledCoinLink,
  CoinHeading,
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
                <Stat>Coin Amount: {CurrencyFormat(asset.purchaseAmount)}</Stat>
                <Stat>
                  Total Value: $
                  {CurrencyFormat(asset.purchaseAmount * asset.price)}
                </Stat>
                <Stat>
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
                </Stat>
                <Stat>Purchase Date: {formatDate(asset.date)}</Stat>
              </StatsContainer>
              <CoinHeading>Market Stats: </CoinHeading>
              <StatsContainer>
                <Stat>Current Price: ${CurrencyFormat(asset.price)}</Stat>
                <Stat>
                  Purchase Price: ${CurrencyFormat(asset.purchasePrice)}
                </Stat>
                <Stat>
                  Net Gain/Loss:{" "}
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
                  Price Change 24h:{" "}
                  {asset.priceChange24 >= 0 ? (
                    <StyledPricePercentArrow src={greenUp} alt="up arrow" />
                  ) : (
                    <StyledPricePercentArrow src={redDown} alt="down arrow" />
                  )}
                  <ColoredSpan
                    color={asset.priceChange24 >= 0 ? "#00FC2A" : "#FE1040"}
                  >
                    {RemoveNegative(asset.priceChange24?.toFixed(2))}%
                  </ColoredSpan>
                </Stat>
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
