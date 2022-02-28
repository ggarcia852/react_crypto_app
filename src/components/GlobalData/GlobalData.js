import React from "react";
import axios from "axios";
import { ProgressBar } from "components";
import { ConvertCurrency } from "../../utils";
import btc from "assets/bitcoin.svg";
import eth from "assets/ethereum.svg";
import {
  StyledGlobalData,
  StyledHeader,
  StyledData,
  StyledIcon,
  StyledBar,
} from "./styles";

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
      <StyledHeader>
        <StyledGlobalData>
          {isLoading && <div>Loading data...</div>}
          {hasError && <div>error</div>}
          {hasData && (
            <>
              <StyledData>
                Coins {globalData.data.active_cryptocurrencies}
              </StyledData>
              <StyledData>Exchanges {globalData.data.markets}</StyledData>
              <StyledData>
                <li>
                  ${ConvertCurrency(globalData.data.total_market_cap.usd)}
                </li>
              </StyledData>
              <StyledData>
                <li>${ConvertCurrency(globalData.data.total_volume.usd)}</li>
                <ProgressBar
                  progress={
                    (globalData.data.total_volume.usd /
                      globalData.data.total_market_cap.usd) *
                    100
                  }
                />
              </StyledData>
              <StyledData>
                <StyledIcon>
                  <img src={btc} alt="bitcoin" />
                </StyledIcon>
                {globalData.data.market_cap_percentage.btc.toFixed(0)}%
                <ProgressBar
                  progress={globalData.data.market_cap_percentage.btc}
                />
              </StyledData>
              <StyledData>
                <StyledIcon>
                  <img src={eth} alt="ethereum" />
                </StyledIcon>
                {globalData.data.market_cap_percentage.eth.toFixed(0)}%
                <ProgressBar
                  progress={globalData.data.market_cap_percentage.eth}
                />
              </StyledData>
            </>
          )}
        </StyledGlobalData>
      </StyledHeader>
    );
  }
}
