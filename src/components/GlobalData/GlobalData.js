import React from "react";
import axios from "axios";
import { Convert } from "../../utils"

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
          <div>total market cap(usd): ${Convert(globalData.data.total_market_cap.usd)}</div>
          <div>total volume(usd): ${Convert(globalData.data.total_volume.usd)}</div>
          <div>market cap %(btc): {globalData.data.market_cap_percentage.btc.toFixed(0)}%</div>
          <div>market cap %(eth): {globalData.data.market_cap_percentage.eth.toFixed(0)}%</div>
          </>
          }
        </div>
      </div>
    );
  }
}


