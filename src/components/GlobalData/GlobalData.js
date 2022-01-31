import React from "react";
import axios from "axios";

export default class GlobalData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    globalData: null,
  };

  getGlobalData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      console.log(data)
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        globalData: data,
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
    this.getGlobalData();
  }

  render() {
    const { hasData, hasError, isLoading, globalData } = this.state;
    const convert = n => {
      if (n < 1e3) return n;
      if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + "K";
      if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "M";
      if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "B";
      if (n >= 1e12) return +(n / 1e12).toFixed(1) + "T";
    };
    return (
      <div>
        <div>Global Data</div>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>
          {hasData && 
          <>
          <div>coins: {globalData.data.active_cryptocurrencies}</div>
          <div>markets: {globalData.data.markets}</div>
          <div>total market cap(usd): ${convert(globalData.data.total_market_cap.usd)}</div>
          <div>total volume(usd): ${convert(globalData.data.total_volume.usd)}</div>
          <div>market cap %(btc): {globalData.data.market_cap_percentage.btc.toFixed(0)}%</div>
          <div>market cap %(eth): {globalData.data.market_cap_percentage.eth.toFixed(0)}%</div>
          </>
          }
        </div>
      </div>
    );
  }
}


