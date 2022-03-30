import React from "react";
import { ConvertCurrency, ConvertDate, RemoveNegative } from "../../utils";
import { ProgressBar } from "components";
import bluePlus from "assets/bluePlus.svg";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
import link from "assets/link.svg";
import layers from "assets/layers.svg";
import feather from "assets/feather.svg";
import {
  StyledTitle,
  StyledCoinContainer,
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
  StyledMarketStatPercent,
  StyledPriceStatPercent,
  StyledPricePercentArrow,
  ColoredDiv,
} from "./styles";

export default function CoinInfo(props) {
  const handleCopy = (site) => {
    navigator.clipboard.writeText(site);
  };

  const linkSize = (link) => {
    if (link.length > 20) {
      return link.substring(0, 20) + "...";
    }
    return link;
  };

  const coinData = props.coinData;
  const marketData = props.marketData;

  return (
    <>
      <StyledTitle>Summary</StyledTitle>
      <StyledContainer>
        <StyledLeftContainer>
          <StyledCoinContainer>
            <StyledCoinImg src={coinData.image.small} alt="coinData" />
            <div>
              {coinData.name}({coinData.symbol?.toUpperCase()})
            </div>
          </StyledCoinContainer>
          <StyledLinkContainer>
            <a
              href={coinData.links.homepage[0]}
              target="_blank"
              rel="noreferrer"
            >
              <StyledLinkImg src={link} alt="link" />
            </a>
            {linkSize(coinData.links.homepage[0])}
          </StyledLinkContainer>
        </StyledLeftContainer>
        <StyledPriceContainer>
          <StyledPrice>${marketData.current_price}</StyledPrice>
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
          <div>
            <StyledPriceLayers src={layers} alt="layers" />
          </div>
          <div>
            <StyledPriceStat>
              <div>
                <StyledPriceArrow src={greenUp} alt="up arrow" />
              </div>
              <div>
                <BoldText>All Time High: </BoldText> ${marketData.ath}
                <div>{ConvertDate(marketData.ath_date)}</div>
              </div>
            </StyledPriceStat>
            <StyledPriceStat>
              <div>
                <StyledPriceArrow src={redDown} alt="down arrow" />
              </div>
              <div>
                <BoldText>All Time Low: </BoldText>${marketData.atl}
                <div>{ConvertDate(marketData.atl_date)}</div>
              </div>
            </StyledPriceStat>
          </div>
        </StyledPriceContainer>
        <StyledMarketContainer>
          <StyledMarketStat>
            <StyledStatImg src={bluePlus} alt="plus" />
            <BoldText>Market Cap:</BoldText> $
            {ConvertCurrency(marketData.market_cap)}{" "}
            <span>
              {marketData.market_cap_change_percentage_24h >= 0 ? (
                <StyledPricePercentArrow src={greenUp} alt="up arrow" />
              ) : (
                <StyledPricePercentArrow src={redDown} alt="down arrow" />
              )}
            </span>
            <StyledMarketStatPercent
              color={
                marketData.market_cap_change_percentage_24h >= 0
                  ? "#00FC2A"
                  : "#FE1040"
              }
            >
              <span>
                {marketData.market_cap_change_percentage_24h > 0
                  ? marketData.market_cap_change_percentage_24h?.toFixed(2)
                  : RemoveNegative(
                      marketData.market_cap_change_percentage_24h?.toFixed(2)
                    )}
                %
              </span>
            </StyledMarketStatPercent>
          </StyledMarketStat>
          <StyledMarketStat>
            <StyledStatImg src={bluePlus} alt="plus" />
            <BoldText>Fully Diluted Valuation:</BoldText> $
            {ConvertCurrency(marketData.fully_diluted_valuation)}
          </StyledMarketStat>
          <StyledMarketStat>
            <StyledStatImg src={bluePlus} alt="plus" />
            <BoldText>Volume 24h:</BoldText> $
            {ConvertCurrency(marketData.market_cap_change_24h)}
          </StyledMarketStat>
          <StyledMarketStat>
            <StyledStatImg src={bluePlus} alt="plus" />
            <BoldText>Volume / Market Cap:</BoldText>{" "}
            {((marketData.total_volume / marketData.market_cap) * 100).toFixed(
              2
            )}
            %
          </StyledMarketStat>
          <StyledMarketStat>
            <StyledStatImg src={bluePlus} alt="plus" />
            <BoldText>Total Volume:</BoldText>{" "}
            {ConvertCurrency(marketData.total_volume)}
          </StyledMarketStat>
          <StyledMarketStat>
            <StyledStatImg src={bluePlus} alt="plus" />
            <BoldText>Circulating Supply:</BoldText>{" "}
            {ConvertCurrency(marketData.circulating_supply)}{" "}
            {coinData.symbol?.toUpperCase()}
          </StyledMarketStat>
          <StyledMarketStat>
            <StyledStatImg src={bluePlus} alt="plus" />
            <BoldText>Max Supply:</BoldText>{" "}
            {marketData.max_supply
              ? ConvertCurrency(marketData.max_supply) +
                " " +
                coinData.symbol?.toUpperCase()
              : "∞"}{" "}
          </StyledMarketStat>
          <StyledMarketStat>
            <StyledBullets>
              <ColoredDiv color={"#FE7D43"}>
                {(
                  (marketData.circulating_supply / marketData.max_supply) *
                  100
                ).toFixed(0) === "Infinity"
                  ? "∞"
                  : (
                      (marketData.circulating_supply / marketData.max_supply) *
                      100
                    ).toFixed(0) + "%"}
              </ColoredDiv>
              <ColoredDiv color={"#FFDCCE"}>
                {100 -
                  (
                    (marketData.circulating_supply / marketData.max_supply) *
                    100
                  ).toFixed(0) ===
                  -"Infinity" ||
                100 -
                  (
                    (marketData.circulating_supply / marketData.max_supply) *
                    100
                  ).toFixed(0) ===
                  0
                  ? ""
                  : 100 -
                    (
                      (marketData.circulating_supply / marketData.max_supply) *
                      100
                    ).toFixed(0) +
                    "%"}
              </ColoredDiv>
            </StyledBullets>
            <ProgressBar
              progress={
                (marketData.circulating_supply / marketData.max_supply) * 100
              }
              background={"#FE7D43"}
              mainBackground={"#FFDCCE"}
            />
          </StyledMarketStat>
        </StyledMarketContainer>
      </StyledContainer>
      <StyledDescriptionTitle>Description</StyledDescriptionTitle>
      <StyledDescription>
        <StyledDescImg>
          <img src={layers} alt="layers" />
        </StyledDescImg>
        <div dangerouslySetInnerHTML={{ __html: coinData.description.en }} />
      </StyledDescription>
      <StyledLinksContainer>
        <StyledBlockchainContainer>
          <a
            href={coinData.links.blockchain_site[0]}
            target="_blank"
            rel="noreferrer"
          >
            <StyledLinkImg src={link} alt="link" />
          </a>
          {linkSize(coinData.links.blockchain_site[0])}
          <StyledLinkImg
            onClick={(e) => handleCopy(coinData.links.blockchain_site[0])}
            src={feather}
            alt="feather"
          />
        </StyledBlockchainContainer>
        <StyledBlockchainContainer>
          <a
            href={coinData.links.blockchain_site[1]}
            target="_blank"
            rel="noreferrer"
          >
            <StyledLinkImg src={link} alt="link" />
          </a>
          {linkSize(coinData.links.blockchain_site[1])}
          <StyledLinkImg
            onClick={(e) => handleCopy(coinData.links.blockchain_site[1])}
            src={feather}
            alt="feather"
          />
        </StyledBlockchainContainer>
        <StyledBlockchainContainer>
          <a
            href={coinData.links.blockchain_site[2]}
            target="_blank"
            rel="noreferrer"
          >
            <StyledLinkImg src={link} alt="link" />
          </a>
          {linkSize(coinData.links.blockchain_site[2])}
          <StyledLinkImg
            onClick={(e) => handleCopy(coinData.links.blockchain_site[2])}
            src={feather}
            alt="feather"
          />
        </StyledBlockchainContainer>
      </StyledLinksContainer>
    </>
  );
}
