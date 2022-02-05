import React from "react";
import axios from "axios";
import { ConvertCurrency } from "../../utils";
import { StyledGlobalData, StyledHeader } from "./styles";

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
      <StyledHeader>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <StyledGlobalData>
          {hasData && (
            <>
              <span>Coins {globalData.data.active_cryptocurrencies}</span>
              <span>Exchange {globalData.data.markets}</span>
              <span>
                total market cap(usd): $
                {ConvertCurrency(globalData.data.total_market_cap.usd)}
              </span>
              <span>
                total volume(usd): $
                {ConvertCurrency(globalData.data.total_volume.usd)}
              </span>
              <span>
                BTC {globalData.data.market_cap_percentage.btc.toFixed(0)}%
              </span>
              <span>
                ETH {globalData.data.market_cap_percentage.eth.toFixed(0)}%
              </span>
              <span>
                market cap change:
                {globalData.data.market_cap_change_percentage_24h_usd.toFixed(0)}%
              </span>
            </>
          )}
        </StyledGlobalData>
      </StyledHeader>
    );
  }
}
