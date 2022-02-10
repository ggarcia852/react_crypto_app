import React from "react";
import axios from "axios";
import { ConvertCurrency } from "../../utils";
import {
  StyledHeader,
  StyledOverview,
  StyledCoinList,
  StyledImg,
  StyledTable,
  StyledTableHeader,
  StyledTableHeaderCell,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledCoinLink,
} from "./styles";

export default class CoinData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    coinData: null,
  };

  getCoinData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C7d"
      );
      this.setState({
        hasData: true,
        isLoading: false,
        hasError: false,
        coinData: data,
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
    this.getCoinData();
  }

  handleClick = async (coin) => {
    const id = coin.id;
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=true`
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { hasData, hasError, isLoading, coinData } = this.state;
    return (
      <>
        <StyledHeader>
          <StyledOverview>Market Overview</StyledOverview>
        </StyledHeader>
        <StyledCoinList>
          {isLoading && <div>Loading data...</div>}
          {hasError && <div>error</div>}
          {hasData && (
            <StyledTable>
              <StyledTableHeader>
                <StyledTableHeaderCell>#</StyledTableHeaderCell>
                <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                <StyledTableHeaderCell>Price</StyledTableHeaderCell>
                <StyledTableHeaderCell>1h%</StyledTableHeaderCell>
                <StyledTableHeaderCell>24h%</StyledTableHeaderCell>
                <StyledTableHeaderCell>7d%</StyledTableHeaderCell>
                <StyledTableHeaderCell>
                  24h Volume/MarketCap
                </StyledTableHeaderCell>
                <StyledTableHeaderCell>
                  Circulating/Total Supply
                </StyledTableHeaderCell>
                <StyledTableHeaderCell>Last 7d</StyledTableHeaderCell>
              </StyledTableHeader>
              <StyledTableBody>
                {coinData.map((coin) => (
                  <StyledTableRow key={coin.id}>
                    <StyledTableCell>{coin.market_cap_rank}</StyledTableCell>
                    <StyledTableCell>
                      <StyledCoinLink to={`/coin/${coin.id}`}>
                        <StyledImg src={coin.image} alt="coin"></StyledImg>
                        {coin.name} ({coin.symbol.toUpperCase()})
                      </StyledCoinLink>
                    </StyledTableCell>
                    <StyledTableCell>${coin.current_price}</StyledTableCell>
                    <StyledTableCell>
                      {coin.price_change_percentage_1h_in_currency.toFixed(2)}%
                    </StyledTableCell>
                    <StyledTableCell>
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </StyledTableCell>
                    <StyledTableCell>
                      {coin.price_change_percentage_7d_in_currency.toFixed(2)}%
                    </StyledTableCell>
                    <StyledTableCell>
                      ${ConvertCurrency(coin.total_volume)} /{" "}
                      {ConvertCurrency(coin.market_cap)}
                    </StyledTableCell>
                    <StyledTableCell>
                      ${ConvertCurrency(coin.circulating_supply)} / $
                      {ConvertCurrency(coin.total_supply)}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </StyledTableBody>
            </StyledTable>
          )}
        </StyledCoinList>
      </>
    );
  }
}
