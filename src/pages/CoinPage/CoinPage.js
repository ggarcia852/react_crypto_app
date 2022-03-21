import React, { useState, useEffect } from "react";
import axios from "axios";
import { CoinChart, CoinInfo, ConversionBar } from "components";

const CoinPage = (props) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [userMessage, setUserMessage] = useState("");
  const [coinData, setCoinData] = useState(null);
  const [marketData, setMarketData] = useState(null);
  const [coinPrice, setCoinPrice] = useState(0);

  useEffect(() => {
    getCoinData(props.match.params.coinId);
    getMarketData(props.match.params.coinId, props.currency);
  }, [props.match.params.coinId, props.currency]);

  const getCoinData = async (coin) => {
    setLoading(true);
    setError(false);
    setUserMessage("");
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true`
      );
      setCoinData(data);
    } catch (err) {
      setLoading(false);
      setError(true);
      setUserMessage(
        "Coin not found. Please select a coin from the list or try again!"
      );
    }
  };

  const getMarketData = async (coin, currency) => {
    setLoading(true);
    setError(false);
    try {
      const data = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&ids=${coin}&sparkline=false`
      );
      const coinPrice = data.data[0].current_price;
      setLoading(false);
      setMarketData(data.data[0]);
      setCoinPrice(coinPrice);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <>
      {loading && <span>Loading data...</span>}
      {error && <div>{userMessage}</div>}
      {marketData && coinData && (
        <CoinInfo coinData={coinData} marketData={marketData} />
      )}
      <ConversionBar
        coinPrice={coinPrice}
        symbol={coinData?.symbol.toUpperCase()}
        currency={props.currency}
      />
      <CoinChart {...props} currency={props.currency} />
    </>
  );
};

export default CoinPage;