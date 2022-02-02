import React, { Component } from "react";
import axios from "axios";
import { ConvertTime } from "utils";

export default class MarketChartData extends Component {
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
    console.log(chartData)
    return (
      <div>
        <h1>Chart Data</h1>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>
        <h2>Hourly Price Data(Bitcoin)</h2>
          {hasData && (
            <div>
            {chartData.prices.map(price=>(
              <>
              <div>time: {ConvertTime(price[0])}</div>
              <div>price: {price[1].toFixed()}</div>
              </>
            ))}
            </div>
          )}
        </div>
        <div>
        <h2>Hourly Volume Data(Bitcoin)</h2>
          {hasData && (
            <div>
            {chartData.total_volumes.map(volume=>(
              <>
              <div>time: {ConvertTime(volume[0])}</div>
              <div>volume: {volume[1].toFixed()}</div>
              </>
            ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
