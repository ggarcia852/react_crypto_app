import React from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertTime } from "utils";
import { StyledHeader, ChartsDiv, StyledCharts, StyledChart } from "./styles";
export default class MarketChartData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    chartData: null,
  };

  getChartData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1&interval=hourly"
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

  componentDidMount() {
    this.getChartData();
  }

  render() {
    const { hasData, hasError, isLoading, chartData } = this.state;
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
                    },
                  }}
                />
              )}
            </StyledChart>
          </StyledCharts>
        </ChartsDiv>
      </>
    );
  }
}
