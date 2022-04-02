import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import exchange from "assets/exchange.svg";
import {
  StyledBarContainer,
  StyledCurrencyImg,
  StyledCurrencyName,
  StyledCurrencyInput,
} from "./styles";

function ConversionBar(props) {
  const [conversionAmount, setConversionAmount] = useState(1);
  const [coinAmount, setCoinAmount] = useState(
    ((1 / props.coinPrice) * 1).toFixed(6)
  );

  useEffect(() => {
    setConversionAmount(1);
    setCoinAmount(
      (1 / props.coinPrice) * 1 > 1
        ? ((1 / props.coinPrice) * 1).toFixed(2)
        : (1 / props.coinPrice).toFixed(5)
    );
  }, [props.currency, props.coinPrice]);

  const handleCurrencyChange = (e) => {
    setConversionAmount(e.target.value);
    setCoinAmount(
      (1 / props.coinPrice) * e.target.value > 0.1 ||
        (1 / props.coinPrice) * e.target.value === 0
        ? ((1 / props.coinPrice) * e.target.value).toFixed(2)
        : ((1 / props.coinPrice) * e.target.value).toFixed(5)
    );
  };

  const handleCoinChange = (e) => {
    setCoinAmount(e.target.value);
    setConversionAmount(
      e.target.value * props.coinPrice > 0.1 ||
        e.target.value * props.coinPrice === 0
        ? (e.target.value * props.coinPrice).toFixed(2)
        : (e.target.value * props.coinPrice).toFixed(5)
    );
  };

  return (
    <StyledBarContainer>
      <StyledCurrencyName>{props.currency.toUpperCase()}</StyledCurrencyName>
      <StyledCurrencyInput
        value={conversionAmount}
        onChange={handleCurrencyChange}
      />
      <StyledCurrencyImg src={exchange} alt="exchange" />
      <StyledCurrencyName>{props.coinSymbol}</StyledCurrencyName>
      <StyledCurrencyInput value={coinAmount} onChange={handleCoinChange} />
    </StyledBarContainer>
  );
}

const mapStateToProps = (state) => ({
  currency: state.currency.currency,
  coinPrice: state.coinPage.coinPrice,
  coinSymbol: state.coinPage.coinSymbol,
});

export default connect(mapStateToProps)(ConversionBar);
