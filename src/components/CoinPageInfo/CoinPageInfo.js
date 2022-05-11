import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCoinData, getMarketData } from "store/coinPageData/actions";
import { Oval } from "react-loader-spinner";
import { CurrencyFormat, RemoveNegative } from "utils";
import { ProgressBar } from "components";
import bluePlus from "assets/bluePlus.svg";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
import link from "assets/link.svg";
import linkLight from "assets/linkLight.svg";
import layers from "assets/layers.svg";
import layersLight from "assets/layersLight.svg";
import feather from "assets/feather.svg";
import featherLight from "assets/featherLight.svg";
import {
  StyledTitle,
  StyledCoinContainer,
  StyledCoinBox,
  StyledCoinImg,
  StyledLinkContainer,
  StyledContainer,
  StyledPriceContainer,
  StyledMarketContainer,
  StyledDescription,
  StyledLinksContainer,
  StyledBlockchainContainer,
  StyledLeftContainer,
  StyledDescriptionTitle,
  StyledPrice,
  StyledPriceStat,
  StyledMarketStat,
  StyledStatImg,
  StyledDescImg,
  StyledLinkImg,
  StyledPriceArrow,
  StyledPriceLayers,
  BoldText,
  StyledBullets,
  StyledPriceStatPercent,
  StyledPricePercentArrow,
  ColoredDiv,
  ColoredSpan,
  PriceContainer,
  StyledProfit,
  StyledDescImgContainer,
  StyledLinkBox,
  StyledMarketBox,
  StyledBlockchainImg,
} from "./styles";

function CoinPageInfo(props) {
  useEffect(() => {
    props.getCoinData(props.match.params.coinId);
    props.getMarketData(props.match.params.coinId);
    //eslint-disable-next-line
  }, [props.match.params.coinId, props.currency]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCopy = (site) => {
    navigator.clipboard.writeText(site);
  };

  const linkSize = (link) => {
    if (link?.length > 20) {
      return link.substring(0, 20) + "...";
    }
    return link;
  };

  const coinData = props.coinData;
  const marketData = props.marketData;
  const hasCoinData = !props.coinDataLoading && props.coinData;
  const hasMarketData = !props.marketDataLoading && props.marketData;
  const hasData = !props.isLoading && props.coinData && props.marketData;
  const assets = props.assets.filter(
    (asset) => asset.id === props.match.params.coinId
  );
  const profit = assets.map((asset) => {
    const currentPrice = asset.price;
    const purchasePrice = asset.purchasePrice;
    const amount = asset.purchaseAmount;
    const total = amount * currentPrice - amount * purchasePrice;
    return total;
  });

  const totalProfit = profit.reduce((a, b) => a + b, 0);
  const symbol = marketData?.symbol.toUpperCase();

  return (
    <div>
      {props.coinDataError && (
        <div>
          Coin not found. Please select a coin from the list or try again!
        </div>
      )}
      <div>
        <StyledTitle>Summary</StyledTitle>
        <StyledContainer>
          <StyledLeftContainer>
            <StyledCoinContainer>
              {props.coinDataLoading && (
                <span>
                  <Oval
                    height="100"
                    width="100"
                    color="#06D554"
                    ariaLabel="loading"
                  />
                </span>
              )}
              {hasCoinData && (
                <StyledCoinBox>
                  <StyledCoinImg src={coinData.image.small} alt="coinData" />
                  <div>
                    {coinData.name}({symbol})
                  </div>
                </StyledCoinBox>
              )}
            </StyledCoinContainer>
            <StyledLinkContainer>
              {hasCoinData && (
                <StyledLinkBox>
                  <div>
                    <a
                      href={coinData.links.homepage[0]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <StyledLinkImg
                        src={props.theme ? link : linkLight}
                        alt="link"
                      />
                    </a>
                  </div>
                  <div>{coinData.links.homepage[0]}</div>
                </StyledLinkBox>
              )}
            </StyledLinkContainer>
          </StyledLeftContainer>
          <StyledPriceContainer>
            {props.marketDataLoading && (
              <span>
                <Oval
                  height="100"
                  width="100"
                  color="#06D554"
                  ariaLabel="loading"
                />
              </span>
            )}
            {hasMarketData && (
              <>
                <PriceContainer>
                  <StyledPrice>
                    ${CurrencyFormat(marketData.current_price)}
                  </StyledPrice>
                  <span>
                    {marketData.price_change_percentage_24h >= 0 ? (
                      <StyledPricePercentArrow src={greenUp} alt="up arrow" />
                    ) : (
                      <StyledPricePercentArrow src={redDown} alt="down arrow" />
                    )}
                    <StyledPriceStatPercent
                      color={
                        marketData.price_change_percentage_24h >= 0
                          ? "#00FC2A"
                          : "#FE1040"
                      }
                    >
                      {marketData.price_change_percentage_24h > 0
                        ? marketData.price_change_percentage_24h?.toFixed(2)
                        : RemoveNegative(
                            marketData.price_change_percentage_24h?.toFixed(2)
                          )}
                      %
                    </StyledPriceStatPercent>
                  </span>
                </PriceContainer>
                {assets.length > 0 && (
                  <StyledProfit>
                    Profit:{" "}
                    <ColoredSpan
                      color={totalProfit >= 0 ? "#00FC2A" : "#FE1040"}
                    >
                      ${CurrencyFormat(totalProfit)}
                    </ColoredSpan>
                  </StyledProfit>
                )}
                <StyledPriceLayers
                  src={props.theme ? layers : layersLight}
                  alt="layers"
                />
                <div>
                  <StyledPriceStat>
                    <div>
                      <StyledPriceArrow src={greenUp} alt="up arrow" />
                    </div>
                    <div>
                      <BoldText>All Time High: </BoldText> $
                      {CurrencyFormat(marketData.ath)}
                      <div>
                        {new Date(marketData.ath_date).toLocaleString()}
                      </div>
                    </div>
                  </StyledPriceStat>
                  <StyledPriceStat>
                    <div>
                      <StyledPriceArrow src={redDown} alt="down arrow" />
                    </div>
                    <div>
                      <BoldText>All Time Low: </BoldText>${marketData.atl}
                      <div>
                        {new Date(marketData.atl_date).toLocaleString()}
                      </div>
                    </div>
                  </StyledPriceStat>
                </div>
              </>
            )}
          </StyledPriceContainer>
          <StyledMarketContainer>
            {props.marketDataLoading && (
              <span>
                <Oval
                  height="100"
                  width="100"
                  color="#06D554"
                  ariaLabel="loading"
                />
              </span>
            )}
            {hasMarketData && (
              <StyledMarketBox>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Market Cap:</BoldText> $
                  {CurrencyFormat(marketData.market_cap)}{" "}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Fully Diluted Valuation:</BoldText> $
                  {CurrencyFormat(marketData.fully_diluted_valuation)}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Volume 24h:</BoldText> $
                  {CurrencyFormat(marketData.market_cap_change_24h)}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Volume / Market Cap:</BoldText>{" "}
                  {(
                    (marketData.total_volume / marketData.market_cap) *
                    100
                  ).toFixed(2)}
                  %
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Total Volume:</BoldText>{" "}
                  {CurrencyFormat(marketData.total_volume)}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Circulating Supply:</BoldText>{" "}
                  {CurrencyFormat(marketData.circulating_supply)}{" "}
                  {coinData?.symbol?.toUpperCase()}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Max Supply:</BoldText>{" "}
                  {marketData.max_supply
                    ? CurrencyFormat(marketData.max_supply) +
                      " " +
                      coinData.symbol?.toUpperCase()
                    : "∞"}{" "}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledBullets>
                    <ColoredDiv color={"#FE7D43"}>
                      {(
                        (marketData.circulating_supply /
                          marketData.max_supply) *
                        100
                      ).toFixed(0) === "Infinity"
                        ? "∞"
                        : (
                            (marketData.circulating_supply /
                              marketData.max_supply) *
                            100
                          ).toFixed(0) + "%"}
                    </ColoredDiv>
                    <ColoredDiv color={"#FFDCCE"}>
                      {100 -
                        (
                          (marketData.circulating_supply /
                            marketData.max_supply) *
                          100
                        ).toFixed(0) ===
                        -"Infinity" ||
                      100 -
                        (
                          (marketData.circulating_supply /
                            marketData.max_supply) *
                          100
                        ).toFixed(0) ===
                        0
                        ? ""
                        : 100 -
                          (
                            (marketData.circulating_supply /
                              marketData.max_supply) *
                            100
                          ).toFixed(0) +
                          "%"}
                    </ColoredDiv>
                  </StyledBullets>
                  <ProgressBar
                    progress={
                      (marketData.circulating_supply / marketData.max_supply) *
                      100
                    }
                    background={"#FE7D43"}
                    mainBackground={"#FFDCCE"}
                  />
                </StyledMarketStat>
              </StyledMarketBox>
            )}
          </StyledMarketContainer>
        </StyledContainer>
        <StyledDescriptionTitle>Description</StyledDescriptionTitle>
        <StyledDescription>
          {hasData && (
            <>
              <StyledDescImgContainer>
                <StyledDescImg
                  src={props.theme ? layers : layersLight}
                  alt="layers"
                />
              </StyledDescImgContainer>
              <div
                dangerouslySetInnerHTML={{ __html: coinData.description.en }}
              />
            </>
          )}
        </StyledDescription>
        <StyledLinksContainer>
          {hasData && (
            <>
              <StyledBlockchainContainer>
                <a
                  href={coinData.links.blockchain_site[0]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledBlockchainImg
                    src={props.theme ? link : linkLight}
                    alt="link"
                  />
                </a>
                {linkSize(coinData.links.blockchain_site[0])}
                <StyledBlockchainImg
                  onClick={(e) => handleCopy(coinData.links.blockchain_site[0])}
                  src={props.theme ? feather : featherLight}
                  alt="feather"
                />
              </StyledBlockchainContainer>
              <StyledBlockchainContainer>
                <a
                  href={coinData.links.blockchain_site[1]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledBlockchainImg
                    src={props.theme ? link : linkLight}
                    alt="link"
                  />
                </a>
                {linkSize(coinData.links.blockchain_site[1])}
                <StyledBlockchainImg
                  onClick={(e) => handleCopy(coinData.links.blockchain_site[1])}
                  src={props.theme ? feather : featherLight}
                  alt="feather"
                />
              </StyledBlockchainContainer>
              <StyledBlockchainContainer>
                <a
                  href={coinData.links.blockchain_site[2]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledBlockchainImg
                    src={props.theme ? link : linkLight}
                    alt="link"
                  />
                </a>
                {linkSize(coinData.links.blockchain_site[2])}
                <StyledBlockchainImg
                  onClick={(e) => handleCopy(coinData.links.blockchain_site[2])}
                  src={props.theme ? feather : featherLight}
                  alt="feather"
                />
              </StyledBlockchainContainer>
            </>
          )}
        </StyledLinksContainer>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  coinData: state.coinPage.coinData,
  marketData: state.coinPage.marketData,
  marketDataLoading: state.coinPage.marketDataLoading,
  marketDataError: state.coinPage.marketDataError,
  coinDataLoading: state.coinPage.coinDataLoading,
  coinDataError: state.coinPage.coinDataError,
  currency: state.currency.currency,
  theme: state.theme.darkTheme,
  assets: state.portfolio.assets,
});

const mapDispatchToProps = {
  getCoinData,
  getMarketData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinPageInfo);
