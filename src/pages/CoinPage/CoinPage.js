import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCoinData, getMarketData } from "store/coinPageData/actions";
import { CoinPageChart, CoinPageInfo, ConversionBar } from "components";

const CoinPage = (props) => {
  useEffect(() => {
    props.getCoinData(props.match.params.coinId);
    props.getMarketData(props.match.params.coinId);
    //eslint-disable-next-line
  }, [props.match.params.coinId, props.currency]);

  const coinData = props.coinData;
  const marketData = props.marketData;
  const coinPrice = marketData?.current_price;
  const hasData = !props.isLoading && props.coinData && props.marketData;

  return (
    <>
      {props.isLoading && <span>Loading data...</span>}
      {props.hasError && (
        <div>
          Coin not found. Please select a coin from the list or try again!{" "}
        </div>
      )}
      {hasData && <CoinPageInfo coinData={coinData} marketData={marketData} />}
      <ConversionBar
        coinPrice={coinPrice}
        symbol={coinData?.symbol.toUpperCase()}
        currency={props.currency}
      />
      <CoinPageChart {...props} currency={props.currency} />
    </>
  );
};

const mapStateToProps = (state) => ({
  coinData: state.coinPageData.coinData,
  marketData: state.coinPageData.marketData,
  isLoading: state.coinPageData.isLoading,
  hasError: state.coinPageData.hasError,
  currency: state.currency.currency,
});

const mapDispatchToProps = {
  getCoinData,
  getMarketData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinPage);
