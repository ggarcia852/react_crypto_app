import React, { Component } from 'react'
import { StyledDropdown } from './styles'

export default class CurrencySelector extends Component {

  state = {
    currency: "usd"
  }

  handleSelect = (e) => {
    this.setState({ currency: e.target.value })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency){
      this.setState({currency: this.state.currency})
      this.props.handleCurrency(this.state.currency)
    }
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

