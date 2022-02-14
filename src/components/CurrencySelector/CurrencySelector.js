import React, { Component } from 'react'
import { StyledDropdown } from './styles'

export default class CurrencySelector extends Component {

  state = {
    currency: "usd"
  }

  handleSelect = (e) => {
    this.setState({ currency: e.target.value })
  }

  render() {
    return (
      <StyledDropdown onChange={this.handleSelect}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
        <option value="btc">BTC</option>
        <option value="eth">ETH</option>
      </StyledDropdown>
    )
  }
}

