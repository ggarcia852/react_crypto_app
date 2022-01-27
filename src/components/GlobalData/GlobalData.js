import React from "react";
import axios from "axios";

export default class GlobalData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    globalData: null,
  };

  getGlobalData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        globalData: data,
      });
    } catch (err) {
      this.setState({
        isLoading: false,
        hasError: true,
      });
      console.log(err);
    }
  };

  componentDidMount() {
    this.getGlobalData();
  }

  render() {
    const { hasData, hasError, isLoading, globalData } = this.state;
    return (
      <div>
          <div>Global Data</div>
        {isLoading && <div>Loading data...</div>}
        {hasError && <div>error</div>}
        <div>{hasData && <div>{globalData.active_cryptocurrencies }</div>}</div>
      </div>
    );
  }
}
