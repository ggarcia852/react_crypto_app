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
      const {data} = await axios("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false");
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        coinData: data,
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
    console.log(this.state.coinData)
    return (
      <div>
        <div>Coin Data</div>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>
          {hasData && 
          <>
          <div>id: {coinData.id}</div>
          <div>symbol: {coinData.symbol}</div>
          <div>image: {coinData.image}</div>
          <div>current price: ${coinData.current_price}</div>
          <div>market cap rank: {coinData.market_cap_rank}</div>
          {/* <div>1h %: {coinData.price_change_percentage_24h}%</div> */}
          <div>24h %: {coinData.circulating_supply}%</div>
          {/* <div>7d %: {coinData.circulating_supply}%</div> */}
          <div>circulating supply: {coinData.circulating_supply}%</div>
          </>
          }
        </div>
      </div>
    );
  }
}