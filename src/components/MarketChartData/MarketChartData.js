import React from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertTime, ConvertCurrency } from "utils";
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
      <div>
        <h1>Chart Data</h1>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>
          <h2>Hourly Price Data(Bitcoin)</h2>
          {hasData && (
            <div>
              <Line
                data={{
                  labels: chartData.prices.map((price) =>
                    ConvertTime(price[0])
                  ),
                  datasets: [
                    {
                      label: "Bitcoin Hourly Price",
                      data: chartData.prices.map((price) => price[1].toFixed()),
                    },
                  ],
                }}
              />
              {/* {chartData.prices.map((price) => (
                <>
                  <div>time: {ConvertTime(price[0])}</div>
                  <div>price: {price[1].toFixed()}</div>
                </>
              ))} */}
            </div>
          )}
        </div>
        <div>
          <h2>Hourly Volume Data(Bitcoin)</h2>
          {hasData && (
            <div>
              <Bar
                data={{
                  labels: chartData.total_volumes.map((volume) =>
                    ConvertTime(volume[0])
                  ),
                  datasets: [
                    {
                      label: "Bitcoin Volume",
                      data: chartData.total_volumes.map((volume) => volume[1]),
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: false,
                    },
                  },
                }}
              />

              {/* {chartData.total_volumes.map((volume) => (
                <>
                  <div>time: {ConvertTime(volume[0])}</div>
                  <div>volume: {volume[1].toFixed()}</div>
                  
                </>
              ))} */}
            </div>
          )}
        </div>
      </div>
    );
  }
}
