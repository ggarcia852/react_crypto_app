import React, { Component } from 'react'
import { StyledDropdown } from './styles'

export default class CurrencySelector extends Component {

  state = {
    currency: "usd"
  }

  handleSelect = (e) => {
    this.setState({ currency: e.target.value })
    this.props.handleCurrency(this.state.currency)
  }

  // handleChange = (e) => {
  //   console.log("change" , this.state.currency)

  //   const currency = this.state.currency
  // }

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (this.state.currency !== prevState.currency) {
  //     const currency = this.state.currency
  //     this.props.handleCurrency(currency)
  //   }
  // }

  render() {
    console.log("select" , this.state.currency)

    return (
      <StyledDropdown onChange={this.handleSelect}  >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
      </StyledDropdown>
    )
  }
}

