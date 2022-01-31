import React from "react";
import axios from "axios";

export default class CoinData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    coinData: null,
  };

  getCoinData = async () => {
    this.setState({ isLoading: true });
    try {
      const response = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        coinData: response,
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
    this.getCoinData();
  }

  render() {
    const { hasData, hasError, isLoading, coinData } = this.state;
    const convert = n => {
      if (n < 1e3) return n;
      if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
      if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
      if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
      if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };
    console.log(this.state.coinData)
    return (
      <div>
        <div>Global Data</div>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>
          {/* {hasData && 
          <>
          <div>coins: {globalData.data.active_cryptocurrencies}</div>
          <div>markets: {globalData.data.markets}</div>
          <div>total market cap(usd): ${convert(globalData.data.total_market_cap.usd)}</div>
          <div>total volume(usd): ${convert(globalData.data.total_volume.usd)}</div>
          <div>market cap %(btc): {globalData.data.market_cap_percentage.btc.toFixed(0)}%</div>
          <div>market cap %(eth): {globalData.data.market_cap_percentage.eth.toFixed(0)}%</div>
          </>
          } */}
        </div>
      </div>
    );
  }
}