import React, { Component, useState, useEffect } from "react";
import currencySymbol from "assets/currencySymbol.svg";
import { StyledBackground, StyledContainer, StyledDropdown } from "./styles";
import { StyledImg } from "components/CoinData/styles";


const CurrencySelector = (props) => {
  const [currency, setCurrency] = useState("usd")

  const handleSelect = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    props.handleCurrency(currency)
    //eslint-disable-next-line
  }, [currency])

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

// export default class CurrencySelector extends Component {
//   state = {
//     currency: "usd",
//   };

//   handleSelect = (e) => {
//     this.setState({ currency: e.target.value });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.currency !== prevState.currency) {
//       this.props.handleCurrency(this.state.currency);
//     }
//   }
//   render() {
//     return (
//       <StyledContainer>
//         <StyledBackground>
//           <StyledImg src={currency} alt="currency" />
//         </StyledBackground>
//         <StyledDropdown onChange={this.handleSelect}>
//           <option value="usd">USD</option>
//           <option value="eur">EUR</option>
//           <option value="gbp">GBP</option>
//           <option value="btc">BTC</option>
//           <option value="eth">ETH</option>
//         </StyledDropdown>
//       </StyledContainer>
//     );
//   }
// }
