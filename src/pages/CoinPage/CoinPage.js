import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertCurrency, ConvertDate } from "../../utils";
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
  StyledChart,
  StyledBarContainer,
} from "./styles";
import { ProgressBar } from "components";
export default class CoinPage extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    userMessage: "",
    coinData: null,
    chartData: null,
    chartDays: 30,
    chartInterval: "daily",
    currency: this.props.currency,
    activeButton: 30,
    buttons: [
      { id: 1, value: "1h", days: 1, interval: "hourly" },
      { id: 7, value: "7d", days: 7, interval: "daily" },
      { id: 30, value: "30d", days: 30, interval: "daily" },
      { id: 90, value: "90d", days: 90, interval: "daily" },
      { id: 365, value: "365d", days: 365, interval: "daily" },
      // { id: 0, value: "max", days: "max", interval: "daily" },
    ],
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

  getChartData = async (coin) => {
    const { chartDays, chartInterval } = this.state;
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${chartDays}&interval=${chartInterval}`
      );
      this.setState({
        chartData: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleClick = (site) => {
    navigator.clipboard.writeText(site)
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.coinId !== prevProps.match.params.coinId) {
      this.getCoinData(this.props.match.params.coinId.toLowerCase());
    }
  }

  componentDidMount() {
    this.getCoinData(this.props.match.params.coinId);
    this.getChartData(this.props.match.params.coinId);
  }

  render() {
    const { hasData, hasError, isLoading, userMessage, chartData } = this.state;
    const coin = this.state.coinData;
    console.log(coin)
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
                  <a
                    href={coin.links.homepage[0]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <StyledLinkImg src={link} alt="link" />
                  </a>
                  {coin.links.homepage[0].substring(0, 25)}
                </StyledLinkContainer>
              </StyledLeftContainer>
              <StyledPriceContainer>
                <StyledPrice>${coin.market_data.current_price.usd}</StyledPrice>
                <StyledPriceStat>
                  <StyledPriceLayers src={layers} alt="layers" />
                </StyledPriceStat>
                <div>
                  <StyledPriceStat>
                    <div>
                      <StyledPriceArrow src={greenUp} alt="up arrow" />
                    </div>
                    <div>
                      <BoldText>All Time High: </BoldText> $
                      {coin.market_data.ath.usd}
                      <div>{ConvertDate(coin.market_data.ath_date.usd)}</div>
                    </div>
                  </StyledPriceStat>
                  <StyledPriceStat>
                    <div>
                      <StyledPriceArrow src={redDown} alt="down arrow" />
                    </div>
                    <div>
                      <BoldText>All Time Low: </BoldText>$
                      {coin.market_data.atl.usd}
                      <div>{ConvertDate(coin.market_data.atl_date.usd)}</div>
                    </div>
                  </StyledPriceStat>
                </div>
              </StyledPriceContainer>
              <StyledMarketContainer>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Market Cap:</BoldText> $
                  {ConvertCurrency(coin.market_data.market_cap.usd)}{" "}
                  <BoldText>
                    {coin.market_data.market_cap_change_percentage_24h.toFixed(
                      2
                    )}
                    %
                  </BoldText>
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Fully Diluted Valuation:</BoldText> $
                  {ConvertCurrency(
                    coin.market_data.fully_diluted_valuation.usd
                  )}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Volume 24h:</BoldText> $
                  {ConvertCurrency(coin.market_data.market_cap_change_24h)}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Volume / Market Cap:</BoldText>{" "}
                  {(
                    (coin.market_data.total_volume.usd /
                      coin.market_data.market_cap.usd) *
                    100
                  ).toFixed(2)}
                  %
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Total Volume:</BoldText>{" "}
                  {ConvertCurrency(coin.market_data.total_volume.usd)}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Circulating Supply:</BoldText>{" "}
                  {ConvertCurrency(coin.market_data.circulating_supply)}{" "}
                  {coin.symbol.toUpperCase()}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Max Supply:</BoldText>{" "}
                  {coin.market_data.max_supply
                    ? ConvertCurrency(coin.market_data.max_supply) +
                      " " +
                      coin.symbol.toUpperCase()
                    : "n/a"}{" "}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledBullets>
                    <div>
                      {(
                        (coin.market_data.circulating_supply /
                          coin.market_data.max_supply) *
                        100
                      ).toFixed(0)}
                      %
                    </div>
                    <div>
                      {100 -
                        (
                          (coin.market_data.circulating_supply /
                            coin.market_data.max_supply) *
                          100
                        ).toFixed(0)}
                      %
                    </div>
                  </StyledBullets>
                  <ProgressBar
                    progress={
                      (coin.market_data.circulating_supply /
                        coin.market_data.max_supply) *
                      100
                    }
                  />
                </StyledMarketStat>
              </StyledMarketContainer>
            </StyledContainer>
            <StyledDescriptionTitle>Description</StyledDescriptionTitle>
            <StyledDescription>
              <StyledDescImg>
                <img src={layers} alt="layers" />
              </StyledDescImg>
              <div dangerouslySetInnerHTML={{ __html: coin.description.en }} />
            </StyledDescription>
            <StyledLinksContainer>
              <StyledBlockchainContainer>
                <a
                  href={coin.links.blockchain_site[0]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLinkImg src={link} alt="link" />
                </a>
                {coin.links.blockchain_site[0].substring(0, 20)}
                <StyledLinkImg onClick={(e) => this.handleClick(coin.links.blockchain_site[0])} src={feather} alt="feather" />
              </StyledBlockchainContainer>
              <StyledBlockchainContainer>
                <a
                  href={coin.links.blockchain_site[1]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLinkImg src={link} alt="link" />
                </a>
                {coin.links.blockchain_site[1].substring(0, 20)}
                <StyledLinkImg onClick={(e) => this.handleClick(coin.links.blockchain_site[1])} src={feather} alt="feather" />
              </StyledBlockchainContainer>
              <StyledBlockchainContainer>
                <a
                  href={coin.links.blockchain_site[2]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLinkImg  src={link} alt="link" />
                </a>
                {coin.links.blockchain_site[2].substring(0, 20)}
                <StyledLinkImg onClick={(e) => this.handleClick(coin.links.blockchain_site[2])} src={feather} alt="feather" />
              </StyledBlockchainContainer>
            </StyledLinksContainer>
          </>
        )}
        <StyledBarContainer>
          timeline and currency bar
        </StyledBarContainer>
        <StyledChart>
        {chartData && (
          <div>
            <Line
                  data={{
                    labels: chartData.prices.map((price) =>
                      ConvertDate(price[0])
                    ),
                    datasets: [
                      {
                        label: "Price",
                        data: chartData.prices.map((price) =>
                          price[1].toFixed()
                        ),
                        pointRadius: 0,
                        borderColor: "#707070",
                        // backgroundColor: "#404040",
                        fill: true,
                        tension: 0.2,
                      },
                    ],
                  }}
                 height={"350px"}
                  options={{
                    maintainAspectRatio: false,
                    scales: {
                      y: {
                        display: false,
                      },
                      x: {
                        display: false,
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                  }}
                />
          </div>
        )}
        </StyledChart>
      </>
    );
  }
}
