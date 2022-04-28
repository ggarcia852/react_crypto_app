import React from "react";
import { connect } from "react-redux";
import { selectCurrency } from "store/currency/actions";
import currencySymbol from "assets/currencySymbol.svg";
import { StyledImgBackground, Container, StyledDropdown } from "./styles";
import { StyledImg } from "components/CoinsTable/styles";

const CurrencySelector = (props) => {
  return (
    <Container>
      <StyledImgBackground>
        <StyledImg src={currencySymbol} alt="currency" />
      </StyledImgBackground>
      <StyledDropdown onChange={(e) => props.selectCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
      </StyledDropdown>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  currency: state.currency,
});

const mapDispatchToProps = {
  selectCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
