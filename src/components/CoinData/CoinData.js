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
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
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
    console.log(coinData);
    return (
      <div>
        <div>Coin Data</div>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>
          {hasData && (
            <div>
              {coinData.map((coin) => (
                <>
                  <div>id: {coin.id}</div>
                  <div>symbol: {coin.symbol}</div>
                  <img src={coin.image} alt="coin"></img>
                  {/* <div>image: {coin.image}</div> */}
                  <div>current price: ${coin.current_price}</div>
                  <div>market cap rank: {coin.market_cap_rank}</div>
                  <div>24h %: {coin.price_change_percentage_24h.toFixed(2)}%</div>
                  {/* <div>1h %: {coin.circulating_supply}%</div> */}
                  {/* <div>7d %: {coin.circulating_supply}%</div> */}
                  <div>circulating supply: ${coin.circulating_supply}</div>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
}
