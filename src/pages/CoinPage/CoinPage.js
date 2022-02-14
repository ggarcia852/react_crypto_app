import React from "react";
import axios from "axios";

export default class CoinPage extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    userMessage: "",
    coinData: null,
  };

  getCoinData = async (coin) => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true`
      );
      console.log(data)
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        userMessage: "",
        coinData: data,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
        userMessage: "Coin not found. Please try again!",
      });
      console.log(err);
    }
  };

  componentDidUpdate(prevProps) {
    if (this.props.match.params.coinId !== prevProps.match.params.coinId) {
      this.getCoinData(this.props.match.params.coinId.toLowerCase());
    }
  }

  componentDidMount() {
    this.getCoinData(this.props.match.params.coinId);
  }

  render() {
    const { hasData, hasError, isLoading, userMessage } = this.state;
    const coin = this.state.coinData;
    return (
      <>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>{userMessage}</div>}
        {hasData && (
          <>
            <h1>{coin.name}({coin.symbol.toUpperCase()})</h1>
            <img src={coin.image.small} alt="coin" />
            <div>{coin.links.homepage[0]}</div>
            <div>Description: {coin.description.en}</div>
            <div>${coin.market_data.current_price.usd}</div>
            <div>24h% {coin.market_data.price_change_percentage_24h_in_currency.usd}%</div>
            <div>All Time High: ${coin.market_data.ath.usd}</div>
            <div>{coin.market_data.ath_date.usd}</div>
            <div>All Time Low: ${coin.market_data.atl.usd}</div>
            <div>{coin.market_data.atl_date.usd}</div>
            <div>Market Cap: ${coin.market_data.market_cap.usd}</div>
            <div>Fully Diluted Valuation: ${coin.market_data.fully_diluted_valuation.usd}</div>
            <div>Volume 24h{coin.market_data.market_cap_change_24h}</div>
            <div>Volume / Market Cap: {coin.market_data.total_volume.usd / coin.market_data.market_cap.usd * 100}</div>
            <div>Total Volume: {coin.market_data.total_volume.usd}</div>
            <div>Circulating Supply: {coin.market_data.circulating_supply}</div> 
            <div>Max Supply: {coin.market_data.max_supply}</div>
            <div>{coin.links.blockchain_site[0]}</div>
            <div>{coin.links.blockchain_site[1]}</div>
            <div>{coin.links.blockchain_site[2]}</div>

          </>
        )}
      </>
    );
  }
}
