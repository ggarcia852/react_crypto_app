import React from "react";
import axios from "axios";
import bluePlus from "assets/bluePlus.svg";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
import link from "assets/link.svg";
import layers from "assets/layers.svg";
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
  StyledPriceStats,
  StyledPriceImg,
  StyledLinkImg,
} from "./styles";
import { ProgressBar } from "components";
export default class CoinPage extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    userMessage: "",
    coinData: null,
  };

  getCoinData = async (coin) => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true`
      );
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        userMessage: "",
        coinData: data,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
        userMessage:
          "Coin not found. Please select a coin from the list or try again!",
      });
      console.log(err);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.coinId !== prevProps.match.params.coinId) {
      this.getCoinData(this.props.match.params.coinId.toLowerCase());
    }
  }

  componentDidMount() {
    this.getCoinData(this.props.match.params.coinId);
  }

  render() {
    const { hasData, hasError, isLoading, userMessage } = this.state;
    const coin = this.state.coinData;
    console.log(coin);
    return (
      <>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>{userMessage}</div>}
        {hasData && (
          <>
            <StyledTitle>Summary</StyledTitle>
            <StyledContainer>
              <StyledLeftContainer>
                <StyledCoinContainer>
                  <StyledCoinImg src={coin.image.small} alt="coin" />
                  <div>
                    {coin.name}({coin.symbol.toUpperCase()})
                  </div>
                </StyledCoinContainer>
                <StyledLinkContainer>
                  <StyledLinkImg src={link} alt="link" />
                  {coin.links.homepage[0].substring(0, 25)}
                </StyledLinkContainer>
              </StyledLeftContainer>
              <StyledPriceContainer>
                <StyledPrice>${coin.market_data.current_price.usd}</StyledPrice>
                <StyledPriceStat>
                  <img src={layers} alt="layers" />
                </StyledPriceStat>
                <StyledPriceStats>
                  <div>
                  <img src={greenUp} alt="up arrow" />
                  </div>
                <StyledPriceStat>
                  All Time High: ${coin.market_data.ath.usd} 
                </StyledPriceStat>
                <StyledPriceStat>{coin.market_data.ath_date.usd}</StyledPriceStat>
                <StyledPriceStat>
                  <div>

                  <StyledPriceImg src={redDown} alt="down arrow" />
                  </div>
                  All Time Low: ${coin.market_data.atl.usd}
                </StyledPriceStat>
                <StyledPriceStat>{coin.market_data.atl_date.usd}</StyledPriceStat>
                </StyledPriceStats>
              </StyledPriceContainer>
              <StyledMarketContainer>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  Market Cap: ${coin.market_data.market_cap.usd}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  Fully Diluted Valuation: $
                  {coin.market_data.fully_diluted_valuation.usd}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  Volume 24h: {coin.market_data.market_cap_change_24h}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  Volume / Market Cap:{" "}
                  {(coin.market_data.total_volume.usd /
                    coin.market_data.market_cap.usd) *
                    100}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  Total Volume: {coin.market_data.total_volume.usd}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  Circulating Supply: {coin.market_data.circulating_supply}{" "}
                  {coin.symbol.toUpperCase()}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  Max Supply: {coin.market_data.max_supply ? coin.market_data.max_supply + " " + (coin.symbol.toUpperCase()) : "n/a"}{" "}
                </StyledMarketStat>
                <StyledMarketStat>
                {(coin.market_data.circulating_supply/coin.market_data.max_supply * 100).toFixed(0)}%   ---  {100 - (coin.market_data.circulating_supply/coin.market_data.max_supply * 100).toFixed(0)}%
                <ProgressBar progress={coin.market_data.circulating_supply/coin.market_data.max_supply * 100} />
                </StyledMarketStat>
              </StyledMarketContainer>
            </StyledContainer>
            <StyledDescriptionTitle>Description</StyledDescriptionTitle>
            <StyledDescription>
              <StyledDescImg>
                <img src={layers} alt="layers" />
              </StyledDescImg>
              {coin.description.en}
            </StyledDescription>
            <StyledLinksContainer>
              <StyledBlockchainContainer>
              <StyledLinkImg src={link} alt="link" />
                {coin.links.blockchain_site[0].substring(0, 30)}
              </StyledBlockchainContainer>
              <StyledBlockchainContainer>
              <StyledLinkImg src={link} alt="link" />
                {coin.links.blockchain_site[1].substring(0, 30)}
              </StyledBlockchainContainer>
              <StyledBlockchainContainer>
              <StyledLinkImg src={link} alt="link" />
                {coin.links.blockchain_site[2].substring(0, 30)}
              </StyledBlockchainContainer>
            </StyledLinksContainer>
          </>
        )}
      </>
    );
  }
}
