import React from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertTime } from "utils";
import {
  StyledHeader,
  ChartsDiv,
  StyledCharts,
  StyledChart,
  StyledContainer,
  StyledButton,
  StyledBar,
} from "./styles";

export default class MarketChartData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    chartData: null,
    chartDays: 1,
    chartInterval: "hourly",
    chartCurrency: "usd",
    buttons: [
      { value: "1h", days: 1, interval: "hourly" },
      { value: "7d", days: 7, interval: "hourly" },
      { value: "30d", days: 30, interval: "daily" },
      { value: "90d", days: 90, interval: "daily" },
      { value: "180d", days: 180, interval: "daily" },
      { value: "365d", days: 365, interval: "daily" },
    ],
  };

  getChartData = async () => {
    const {chartDays, chartInterval, chartCurrency} = this.state
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${chartCurrency}&days=${chartDays}&interval=${chartInterval}`
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

  setCurrency = () => {
    const currency = this.props.currency
    this.setState({chartCurrency: currency})
    console.log("market", currency)
    
  }

  handleClick = (button) => {
    this.setState({ chartDays: button.days, chartInterval: button.interval });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.chartDays !== prevState.chartDays) {
      this.getChartData();
    }
    if (this.state.chartCurrency !== prevState.chartCurrency){
      this.setCurrency()
    }
  }

  componentDidMount() {
    this.setCurrency();
    this.getChartData();
  }

  render() {
    const { hasData, hasError, isLoading, chartData, buttons } = this.state;

    return (
      <>
        <StyledHeader>Bitcoin Overview</StyledHeader>
        <ChartsDiv>
          <StyledCharts>
            {isLoading && <div>Loading data...</div>}
            {hasError && <div>error</div>}
            {hasData && (
              <StyledChart>
                <div>BTC</div>
                <Line
                  data={{
                    labels: chartData.prices.map((price) =>
                      ConvertTime(price[0])
                    ),
                    datasets: [
                      {
                        label: "Bitcoin Hourly Price",
                        data: chartData.prices.map((price) =>
                          price[1].toFixed()
                        ),
                        borderColor: "#00FF5F",
                        backgroundColor: "#518665",
                        fill: true,
                        tension: 0.1,
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
                  }}
                />
              </StyledChart>
            )}
          </StyledCharts>
          <StyledCharts>
            <StyledChart>
              <div>Volume 24h</div>
              {hasData && (
                <Bar
                  data={{
                    labels: chartData.total_volumes.map((volume) =>
                      ConvertTime(volume[0])
                    ),
                    datasets: [
                      {
                        label: "Bitcoin Volume",
                        data: chartData.total_volumes.map(
                          (volume) => volume[1]
                        ),
                        backgroundColor: "#2172E5",
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
