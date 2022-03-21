import React, { useState, useEffect } from "react";
import currencySymbol from "assets/currencySymbol.svg";
import { StyledBackground, StyledContainer, StyledDropdown } from "./styles";
import { StyledImg } from "components/CoinData/styles";

const CurrencySelector = (props) => {
  const [currency, setCurrency] = useState("usd")
  
  useEffect(() => {
    props.handleCurrency(currency)
    //eslint-disable-next-line
  }, [currency])

  const handleSelect = (e) => {
    setCurrency(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledBackground>
        <StyledImg src={currencySymbol} alt="currency" />
      </StyledBackground>
      <StyledDropdown onChange={handleSelect}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
      </StyledDropdown>
    </StyledContainer>
  );
}

export default CurrencySelector;