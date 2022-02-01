import React from 'react';
import { CoinData, GlobalData } from 'components';

export default class CoinList extends React.Component {
  render() {
    return (
      <>
      <GlobalData />;
      <CoinData /> ;
      </>
    )
  }
}
