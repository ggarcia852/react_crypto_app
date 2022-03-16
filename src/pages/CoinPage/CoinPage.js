import React from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertCurrency, ConvertDate, RemoveNegative } from "../../utils";
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
  StyledPricePercentArrow,
  ColoredDiv,
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
    marketData: null,
    coinPrice: 0,
    chartDays: "30",
    conversionAmount: 1,
    coinAmount: 1,
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

  getMarketData = async (coin, currency) => {
    try {
      const data = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coin}&sparkline=false`
      );
      const coinPrice = data.data[0].current_price;
      this.setState({
        marketData: data.data[0],
        coinPrice,
        coinAmount: ((1 / coinPrice) * 1).toFixed(6),
      });
    } catch (err) {
      console.log(err);
    }
  };

  getChartData = async (coin, currency) => {
    const { chartDays } = this.state;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${chartDays}`
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
      conversionAmount: e.target.value,
      coinAmount: ((1 / this.state.coinPrice) * e.target.value).toFixed(6),
    });
  };

  handleCoinChange = (e) => {
    this.setState({
      coinAmount: e.target.value,
      conversionAmount: (e.target.value * this.state.coinPrice).toFixed(6),
    });
  };

  currencyReset = () => {
    this.setState({ conversionAmount: 1 });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.coinId !== prevProps.match.params.coinId) {
      this.getCoinData(this.props.match.params.coinId.toLowerCase());
      this.getChartData(this.props.match.params.coinId, this.props.currency);
      this.getMarketData(this.props.match.params.coinId, this.props.currency);
    }
    if (this.state.chartDays !== prevState.chartDays) {
      this.getChartData(this.props.match.params.coinId, this.props.currency);
    }
    if (this.props.currency !== prevProps.currency) {
      this.getChartData(this.props.match.params.coinId, this.props.currency);
      this.getMarketData(this.props.match.params.coinId, this.props.currency);
      this.currencyReset();
    }
  }

  componentDidMount() {
    this.getCoinData(this.props.match.params.coinId);
    this.getChartData(this.props.match.params.coinId, this.props.currency);
    this.getMarketData(this.props.match.params.coinId, this.props.currency);
  }

  render() {
    const { hasData, hasError, isLoading, userMessage, chartData, marketData } =
      this.state;
    const coin = this.state.coinData;
    const linkSize = (link) => {
      if (link.length > 20) {
        return link.substring(0, 20) + "...";
      }
      return link;
    };

    return (
      <>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>{userMessage}</div>}
        {hasData && marketData && (
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
                  {linkSize(coin.links.homepage[0])}
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
                      ? marketData.price_change_percentage_24h.toFixed(2)
                      : RemoveNegative(
                          marketData.price_change_percentage_24h.toFixed(2)
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
                        ? marketData.market_cap_change_percentage_24h.toFixed(2)
                        : RemoveNegative(
                            marketData.market_cap_change_percentage_24h.toFixed(
                              2
                            )
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
                  {(
                    (marketData.total_volume / marketData.market_cap) *
                    100
                  ).toFixed(2)}
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
                  {coin.symbol.toUpperCase()}
                </StyledMarketStat>
                <StyledMarketStat>
                  <StyledStatImg src={bluePlus} alt="plus" />
                  <BoldText>Max Supply:</BoldText>{" "}
                  {marketData.max_supply
                    ? ConvertCurrency(marketData.max_supply) +
                      " " +
                      coin.symbol.toUpperCase()
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
                {linkSize(coin.links.blockchain_site[0])}
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
                {linkSize(coin.links.blockchain_site[1])}
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
                {linkSize(coin.links.blockchain_site[2])}
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
          <StyledCurrencyName>
            {this.props.currency.toUpperCase()}
          </StyledCurrencyName>
          <StyledCurrencyInput
            value={this.state.conversionAmount}
            onChange={this.handleCurrencyChange}
          />
          <StyledCurrencyImg src={exchange} alt="exchange" />
          {this.state.coinData && (
            <>
              <StyledCurrencyName>
                {coin.symbol.toUpperCase()}
              </StyledCurrencyName>
              <StyledCurrencyInput
                value={this.state.coinAmount}
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
