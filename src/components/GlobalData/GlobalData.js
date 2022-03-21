import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProgressBar } from "components";
import { ConvertCurrency } from "../../utils";
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
} from "./styles";

const GlobalData = (props) => {
  const [globalData, setGlobalData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getGlobalData();
  }, []);

  const getGlobalData = async () => {
    setError(false);
    setLoading(true);
    try {
      const { data } = await axios("https://api.coingecko.com/api/v3/global");
      setLoading(false);
      setGlobalData(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const hasData = !loading && globalData;
  const marketCap = globalData.data.total_market_cap[props.currency]
  const volume = globalData.data.total_volume[props.currency]

  return (
    <StyledHeader>
      <StyledGlobalData>
        {loading && <div>Loading data...</div>}
        {error && <div>Error loading data.</div>}
        {hasData && (
          <>
            <StyledData>
              Coins: {globalData.data.active_cryptocurrencies}
            </StyledData>
            <StyledData>Markets: {globalData.data.markets}</StyledData>
            <StyledData>
              <li>
                ${ConvertCurrency(marketCap)}
                {globalData.data.market_cap_change_percentage_24h_usd > 0 ? (
                  <StyledArrow src={greenUp} alt="up arrow" />
                ) : (
                  <StyledArrow src={redDown} alt="down arrow" />
                )}
              </li>
            </StyledData>
            <StyledData>
              <li>${ConvertCurrency(volume)}</li>
              <StyledBar>
                <ProgressBar
                  background={"#2775C9"}
                  mainBackground={"#A7C2F5"}
                  progress={
                    (globalData.data.total_volume.usd /
                      globalData.data.total_market_cap.usd) *
                    100
                  }
                />
              </StyledBar>
            </StyledData>
            <StyledData>
              <StyledIcon>
                <img src={btc} alt="bitcoin" />
              </StyledIcon>
              {globalData.data.market_cap_percentage.btc.toFixed(0)}%
              <StyledBar>
                <ProgressBar
                  background={"#2775C9"}
                  mainBackground={"#A7C2F5"}
                  progress={globalData.data.market_cap_percentage.btc}
                />
              </StyledBar>
            </StyledData>
            <StyledData>
              <StyledIcon>
                <img src={eth} alt="ethereum" />
              </StyledIcon>
              {globalData.data.market_cap_percentage.eth.toFixed(0)}%
              <StyledBar>
                <ProgressBar
                  background={"#2775C9"}
                  mainBackground={"#A7C2F5"}
                  progress={globalData.data.market_cap_percentage.eth}
                />
              </StyledBar>
            </StyledData>
          </>
        )}
      </StyledGlobalData>
    </StyledHeader>
  );
};

export default GlobalData;
