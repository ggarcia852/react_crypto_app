import React from "react";
import axios from "axios";
import { Convert } from "../../utils"


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
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C7d"
      );
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
    return (
      <div>
        <h1>Coin Data</h1>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>
          {hasData && (
            <div>
              {coinData.map((coin) => (
                <>
                  <h2>name: {coin.name}</h2>
                  <div>id: {coin.id}</div>
                  <div>symbol: {coin.symbol}</div>
                  <img src={coin.image} alt="coin"></img>
                  <div>price: ${coin.current_price}</div>
                  <div>market cap rank: {coin.market_cap_rank}</div>
                  <div>1h: {coin.price_change_percentage_1h_in_currency.toFixed(2)}%</div>
                  <div>24h: {coin.price_change_percentage_24h.toFixed(2)}%</div>
                  <div>7d: {coin.price_change_percentage_7d_in_currency.toFixed(2)}%</div>
                  <div>volume: ${Convert(coin.total_volume)}</div>
                  <div>circulating supply: ${Convert(coin.circulating_supply)}</div>
                  <div>total supply: ${Convert(coin.total_supply)}</div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}