import React, { useState, useEffect } from "react";
import exchange from "assets/exchange.svg";
import {
  StyledBarContainer,
  StyledCurrencyImg,
  StyledCurrencyName,
  StyledCurrencyInput,
} from "./styles";

export default function ConversionBar(props) {
  const [conversionAmount, setConversionAmount] = useState(1);
  const [coinAmount, setCoinAmount] = useState(
    ((1 / props.coinPrice) * 1).toFixed(6)
  );

  useEffect(() => {
    setConversionAmount(1);
    setCoinAmount(((1 / props.coinPrice) * 1).toFixed(6));
  }, [props.currency, props.coinPrice]);

  const handleCurrencyChange = (e) => {
    setConversionAmount(e.target.value);
    setCoinAmount(((1 / props.coinPrice) * e.target.value).toFixed(6));
  };

  const handleCoinChange = (e) => {
    setCoinAmount(e.target.value);
    setConversionAmount((e.target.value * props.coinPrice).toFixed(6));
  };

  return (
    <StyledBarContainer>
      <StyledCurrencyName>{props.currency.toUpperCase()}</StyledCurrencyName>
      <StyledCurrencyInput
        value={conversionAmount}
        onChange={handleCurrencyChange}
      />
      <StyledCurrencyImg src={exchange} alt="exchange" />
      <StyledCurrencyName>{props.symbol}</StyledCurrencyName>
      <StyledCurrencyInput value={coinAmount} onChange={handleCoinChange} />
    </StyledBarContainer>
  );
}
