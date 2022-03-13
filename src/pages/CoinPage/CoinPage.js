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
import exchange from "assets/exchange.svg";
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
  StyledDayContainer,
  StyledButtonInput,
  StyledBarContainer,
  StyledCurrencyImg,
  StyledCurrencyName,
  StyledCurrencyInput,
  StyledMarketStatPercent,
  StyledPriceStatPercent,
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
    chartDays: "30",
    currency: this.props.currency,
    conversionCurrency: 1,
    coinCurrency: 0,
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
        coinCurrency: (1 / data.market_data.current_price.usd).toFixed(2),
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
    const { chartDays } = this.state;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${chartDays}`
      );
      this.setState({
        chartData: data,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleCopy = (site) => {
    navigator.clipboard.writeText(site);
  };

  handleChange = (e) => {
    this.setState({ chartDays: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({
      conversionCurrency: e.target.value,
      coinCurrency: (
        (1 / this.state.coinData.market_data.current_price.usd) *
        e.target.value
      ).toFixed(2),
    });
  };

  handleCoinChange = (e) => {
    this.setState({
      coinCurrency: e.target.value,
      conversionCurrency: (
        e.target.value * this.state.coinData.market_data.current_price.usd
      ).toFixed(2),
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.coinId !== prevProps.match.params.coinId) {
      this.getCoinData(this.props.match.params.coinId.toLowerCase());
      this.getChartData(this.props.match.params.coinId);
    }
    if (this.state.chartDays !== prevState.chartDays) {
      this.getChartData(this.props.match.params.coinId);
    }
  }

  componentDidMount() {
    this.getCoinData(this.props.match.params.coinId);
    this.getChartData(this.props.match.params.coinId);
  }

  render() {
    const { hasData, hasError, isLoading, userMessage, chartData } = this.state;
    const coin = this.state.coinData;
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
                <StyledPrice>
                  ${coin.market_data.current_price.usd}
                 </StyledPrice>
                  <StyledPriceStatPercent color={
                        coin.market_data.price_change_percentage_24h >= 0
                          ? "#00FC2A"
                          : "#FE1040"
                      }>{coin.market_data.price_change_percentage_24h.toFixed(2)}%</StyledPriceStatPercent>
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
                  <StyledMarketStatPercent color={
                         coin.market_data.market_cap_change_percentage_24h >= 0
                          ? "#00FC2A"
                          : "#FE1040"
                      }>
                    <BoldText>
                      {coin.market_data.market_cap_change_percentage_24h.toFixed(
                        2
                      )}
                      %
                    </BoldText>
                  </StyledMarketStatPercent>
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
                    : "∞"}{" "}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledBullets>
                    <div>
                      {(
                        (coin.market_data.circulating_supply /
                          coin.market_data.max_supply) *
                        100
                      ).toFixed(0) === "Infinity"
                        ? "∞"
                        : (
                            (coin.market_data.circulating_supply /
                              coin.market_data.max_supply) *
                            100
                          ).toFixed(0) + "%"}
                    </div>
                    <div>
                      {100 -
                        (
                          (coin.market_data.circulating_supply /
                            coin.market_data.max_supply) *
                          100
                        ).toFixed(0) ===
                      -"Infinity"
                        ? "∞"
                        : 100 -
                          (
                            (coin.market_data.circulating_supply /
                              coin.market_data.max_supply) *
                            100
                          ).toFixed(0) +
                          "%"}
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
                <StyledLinkImg
                  onClick={(e) =>
                    this.handleCopy(coin.links.blockchain_site[0])
                  }
                  src={feather}
                  alt="feather"
                />
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
                <StyledLinkImg
                  onClick={(e) =>
                    this.handleCopy(coin.links.blockchain_site[1])
                  }
                  src={feather}
                  alt="feather"
                />
              </StyledBlockchainContainer>
              <StyledBlockchainContainer>
                <a
                  href={coin.links.blockchain_site[2]}
                  target="_blank"
                  rel="noreferrer"
                >
                  <StyledLinkImg src={link} alt="link" />
                </a>
                {coin.links.blockchain_site[2].substring(0, 20)}
                <StyledLinkImg
                  onClick={(e) =>
                    this.handleCopy(coin.links.blockchain_site[2])
                  }
                  src={feather}
                  alt="feather"
                />
              </StyledBlockchainContainer>
            </StyledLinksContainer>
          </>
        )}
        <StyledBarContainer>
          <StyledCurrencyName>USD</StyledCurrencyName>
          <StyledCurrencyInput
            value={this.state.conversionCurrency}
            onChange={this.handleCurrencyChange}
          />
          <StyledCurrencyImg src={exchange} alt="exchange" />
          {this.state.coinData && (
            <>
              <StyledCurrencyName>
                {coin.symbol.toUpperCase()}
              </StyledCurrencyName>
              <StyledCurrencyInput
                // placeholder={coin.market_data.current_price.usd}
                value={this.state.coinCurrency}
                onChange={this.handleCoinChange}
              />
            </>
          )}
        </StyledBarContainer>
        <StyledDayContainer>
          <div>
            <StyledButtonInput
              type="radio"
              name="days"
              value="1"
              checked={this.state.chartDays === "1"}
              onChange={this.handleChange}
            />
            <label htmlFor="1">1d</label>
            <StyledButtonInput
              type="radio"
              name="days"
              value="7"
              checked={this.state.chartDays === "7"}
              onChange={this.handleChange}
            />
            <label htmlFor="7">7d</label>
            <StyledButtonInput
              type="radio"
              name="days"
              value="30"
              checked={this.state.chartDays === "30"}
              onChange={this.handleChange}
            />
            <label htmlFor="30">30d</label>
            <StyledButtonInput
              type="radio"
              name="days"
              value="90"
              checked={this.state.chartDays === "90"}
              onChange={this.handleChange}
            />
            <label htmlFor="90">90d</label>
            <StyledButtonInput
              type="radio"
              name="days"
              value="365"
              checked={this.state.chartDays === "365"}
              onChange={this.handleChange}
            />
            <label htmlFor="1y">1y</label>
            <StyledButtonInput
              type="radio"
              name="days"
              value="max"
              checked={this.state.chartDays === "max"}
              onChange={this.handleChange}
            />
            <label htmlFor="max">Max</label>
          </div>
        </StyledDayContainer>
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
                      data: chartData.prices.map((price) => price[1]),
                      pointRadius: 0,
                      borderColor: "#707070",
                      backgroundColor: "#191B1F",
                      fill: true,
                      tension: 0.4,
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
