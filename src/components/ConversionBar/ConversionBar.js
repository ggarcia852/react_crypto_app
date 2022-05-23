import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { CurrencyFormat } from "utils";
import exchange from "assets/exchange.svg";
import exchangeLight from "assets/exchangeLight.svg";
import {
  StyledBarContainer,
  StyledCurrencyImg,
  StyledCurrencyName,
  StyledCurrencyInput,
  StyledConversionBox,
} from "./styles";

function ConversionBar(props) {
  const [conversionAmount, setConversionAmount] = useState(1);
  const [coinAmount, setCoinAmount] = useState(
    ((1 / props.coinPrice) * 1).toFixed(6)
  );

  useEffect(() => {
    const price = props.coinPrice;
    setConversionAmount(1);
    setCoinAmount(CurrencyFormat((1 / price) * 1));
  }, [props.currency, props.coinPrice]);

  const handleCurrencyChange = (e) => {
    const amount = e.target.value;
    const price = props.coinPrice;
    setConversionAmount(amount);
    setCoinAmount(CurrencyFormat((1 / price) * amount));
  };

  const handleCoinChange = (e) => {
    const amount = e.target.value;
    const price = props.coinPrice;
    setCoinAmount(amount);
    setConversionAmount(CurrencyFormat(amount * price));
  };

  const hasMarketData = !props.marketDataLoading && props.marketData;

  return (
    <>
      {hasMarketData && (
        <StyledBarContainer>
          <StyledConversionBox>
            <StyledCurrencyName>
              {props.currency.toUpperCase()}
            </StyledCurrencyName>
            <StyledCurrencyInput
              value={conversionAmount}
              onChange={handleCurrencyChange}
            />
          </StyledConversionBox>
          <StyledCurrencyImg src={props.theme ? exchange : exchangeLight} alt="exchange" />
          <StyledConversionBox>
            <StyledCurrencyName>{props.coinSymbol}</StyledCurrencyName>
            <StyledCurrencyInput
              value={coinAmount}
              onChange={handleCoinChange}
            />
          </StyledConversionBox>
        </StyledBarContainer>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  marketData: state.coinPage.marketData,
  marketDataLoading: state.coinPage.marketDataLoading,
  coinPrice: state.coinPage.coinPrice,
  coinSymbol: state.coinPage.coinSymbol,
  theme: state.theme.darkTheme,
});

export default connect(mapStateToProps)(ConversionBar);
