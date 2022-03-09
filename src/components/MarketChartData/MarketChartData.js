import React from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertCurrency, ConvertDate } from "utils";
import {
  StyledHeader,
  ChartsDiv,
  StyledCharts,
  StyledChart,
  StyledContainer,
  StyledButton,
  StyledBar,
  StyledHeading,
  StyledTitle,
  StyledAmount,
  StyledDate,
} from "./styles";

export default class MarketChartData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    chartData: null,
    chartDays: 1,
    chartInterval: "hourly",
    currency: this.props.currency,
    activeButton: 1,
    buttons: [
      { id: 1, value: "1h", days: 1, interval: "hourly" },
      { id: 7, value: "7d", days: 7, interval: "hourly" },
      { id: 30, value: "30d", days: 30, interval: "daily" },
      { id: 90, value: "90d", days: 90, interval: "daily" },
      { id: 180, value: "180d", days: 180, interval: "daily" },
      { id: 365, value: "365d", days: 365, interval: "daily" },
    ],
  };

  getChartData = async (currency) => {
    const { chartDays, chartInterval } = this.state;
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${currency}&days=${chartDays}&interval=${chartInterval}`
      );
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        chartData: data,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
      console.log(err);
    }
  };

  handleClick = (button) => {
    this.setState({ chartDays: button.days, chartInterval: button.interval, activeButton: button.id });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.chartDays !== prevState.chartDays) {
      this.getChartData(this.props.currency);
    }
    if(this.props.currency !== prevProps.currency){
      this.getChartData(this.props.currency)
    }
  }

  componentDidMount() {
    this.getChartData(this.props.currency);
  }

  render() {
    const { hasData, hasError, isLoading, chartData, buttons } = this.state;
    let today = new Date().toDateString();
    let price = chartData?.prices.slice(-1)[0].slice(-1)[0].toFixed(0);
    let volume = chartData?.total_volumes.slice(-1)[0].slice(-1)[0].toFixed(0);
    return (
      <>
        <StyledHeader>Bitcoin Overview</StyledHeader>
        <ChartsDiv>
          <StyledCharts>
            {isLoading && <div>Loading data...</div>}
            {hasError && <div>error</div>}
            {hasData && (
              <StyledChart>
                <StyledHeading>
                  <StyledTitle>Price</StyledTitle>
                  <StyledAmount>${price}</StyledAmount>
                  <StyledDate>{today}</StyledDate>
                </StyledHeading>
                <Line
                  data={{
                    labels: chartData.prices.map((price) =>
                      ConvertDate(price[0])
                    ),
                    datasets: [
                      {
                        label: "Bitcoin Hourly Price",
                        data: chartData.prices.map((price) =>
                          price[1].toFixed()
                        ),
                        pointRadius: 0,
                        borderColor: "#00FF5F",
                        backgroundColor: "#518665",
                        fill: true,
                        tension: 0.2,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: false,
                        display: false,
                      },
                      x: {
                        // display: false,
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    layout: {
                      padding: {
                        left: 70,
                        right: 70,
                        bottom: 40,
                        top: 30,
                      },
                    },
                  }}
                />
              </StyledChart>
            )}
          </StyledCharts>
          <StyledCharts>
            <StyledChart>
              <StyledHeading>
                <StyledTitle>Volume</StyledTitle>
                <StyledAmount>${ConvertCurrency(volume)}</StyledAmount>
                <StyledDate>{today}</StyledDate>
              </StyledHeading>
              {hasData && (
                <Bar
                  data={{
                    labels: chartData.total_volumes.map((volume) =>
                      ConvertDate(volume[0])
                    ),
                    datasets: [
                      {
                        label: "Bitcoin Volume",
                        data: chartData.total_volumes.map(
                          (volume) => volume[1]
                        ),
                        backgroundColor: "#2172E5",
                        borderRadius: 5,
                      },
                    ],
                  }}
                  options={{
                    scales: {
                      y: {
                        beginAtZero: false,
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
                    layout: {
                      padding: {
                        left: 70,
                        right: 70,
                        bottom: 40,
                        top: 30,
                      },
                    },
                  }}
                />
              )}
            </StyledChart>
          </StyledCharts>
        </ChartsDiv>
        <StyledContainer>
          <StyledBar>
            {buttons.map((button) => (
              <StyledButton
                key={button.value}
                onClick={() => this.handleClick(button)}
                active={button.id === this.state.activeButton}
              >
                {button.value}
              </StyledButton>
            ))}
          </StyledBar>
        </StyledContainer>
      </>
    );
  }
}
