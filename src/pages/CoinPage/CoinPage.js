import React from "react";
import axios from "axios";

export default class CoinPage extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
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
    this.getCoinData(this.props.match.params.coinId);
  }

  render() {
    const { hasData, hasError, isLoading } = this.state;
    const coin = this.state.coinData;
    return (
      <>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
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
