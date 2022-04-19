import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Oval } from "react-loader-spinner";
import { getData } from "store/globalData/actions";
import { ProgressBar } from "components";
import { CurrencyFormat } from "../../utils";
import btc from "assets/bitcoin.svg";
import eth from "assets/ethereum.svg";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
import {
  StyledGlobalData,
  StyledHeader,
  StyledData,
  StyledIcon,
  StyledBar,
  StyledArrow,
  Loading,
} from "./styles";

const GlobalData = (props) => {
  useEffect(() => {
    props.getData();
    //eslint-disable-next-line
  }, [props.currency]);

  const currency = props.currency;
  const marketCap = props.globalData?.total_market_cap[currency];
  const volume = props.globalData?.total_volume[currency];
  const globalData = props.globalData;
  const hasData = !props.isLoading && props.globalData;

  return (
    <StyledHeader>
      {props.isLoading && (
        <Loading>
          <Oval height="35" color="#06D554" ariaLabel="loading" />
        </Loading>
      )}
      {hasData && (
        <StyledGlobalData>
          {props.hasError && <div>Error loading data.</div>}
          <>
            <StyledData>
              Coins: {globalData.active_cryptocurrencies.toLocaleString()}
            </StyledData>
            <StyledData>Markets: {globalData.markets}</StyledData>
            <StyledData>
              <li>
                ${CurrencyFormat(marketCap)}
                {globalData.market_cap_change_percentage_24h_usd > 0 ? (
                  <StyledArrow src={greenUp} alt="up arrow" />
                ) : (
                  <StyledArrow src={redDown} alt="down arrow" />
                )}
              </li>
            </StyledData>
            <StyledData>
              <li>${CurrencyFormat(volume)}</li>
              <StyledBar>
                <ProgressBar
                  background={"#2775C9"}
                  mainBackground={"#A7C2F5"}
                  progress={(volume / marketCap) * 100}
                />
              </StyledBar>
            </StyledData>
            <StyledData>
              <StyledIcon>
                <img src={btc} alt="bitcoin" />
              </StyledIcon>
              {globalData.market_cap_percentage.btc.toFixed(0)}%
              <StyledBar>
                <ProgressBar
                  background={"#2775C9"}
                  mainBackground={"#A7C2F5"}
                  progress={globalData.market_cap_percentage.btc}
                />
              </StyledBar>
            </StyledData>
            <StyledData>
              <StyledIcon>
                <img src={eth} alt="ethereum" />
              </StyledIcon>
              {globalData.market_cap_percentage.eth.toFixed(0)}%
              <StyledBar>
                <ProgressBar
                  background={"#2775C9"}
                  mainBackground={"#A7C2F5"}
                  progress={globalData.market_cap_percentage.eth}
                />
              </StyledBar>
            </StyledData>
          </>
        </StyledGlobalData>
      )}
    </StyledHeader>
  );
};

const mapStateToProps = (state) => ({
  globalData: state.globalData.data,
  isLoading: state.globalData.isLoading,
  hasError: state.globalData.hasError,
  currency: state.currency.currency,
});

const mapDispatchToProps = {
  getData,
};

export default connect(mapStateToProps, mapDispatchToProps)(GlobalData);
