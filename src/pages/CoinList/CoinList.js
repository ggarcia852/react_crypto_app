import React from "react";
import { GlobalData, CoinData, MarketChartData } from "components";
import { Container } from "./styles";


export default class CoinList extends React.Component {
  // componentDidUpdate(prevProps, prevState){
  //   if(this.props.currency !== prevProps.currency)
  //   this.props.currency
  // }
  render() {
    return (
      <Container>
        <GlobalData />
        <MarketChartData currency={this.props.currency} />
        <CoinData currency={this.props.currency} />
      </Container>
    );
  }
}
