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
            <h1>{coin.name}</h1>
            <img src={coin.image.large} alt="coin" />
          </>
        )}
      </>
    );
  }
}
