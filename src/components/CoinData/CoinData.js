import React from "react";
import axios from "axios";
import { ConvertCurrency } from "../../utils";
import { ProgressBar } from "components";
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
  StyledBullet,
  StyledBullets,
} from "./styles";

export default class CoinData extends React.Component {
  state = {
    hasData: false,
    isLoading: false,
    hasError: false,
    coinData: null,
    currency: "usd"
  };

  getCoinData = async () => {
    this.setState({ isLoading: true });
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.state.currency}&order=market_cap_desc&per_page=25&page=1&sparkline=false&price_change_percentage=1h%2C%2024h%2C7d`
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

  setCurrency = () => {
    let currency = this.props.currency
    this.setState({currency})
    console.log("chart", currency)
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currency !== prevState.currency){
      this.setCurrency()
    }
  }

  componentDidMount() {
    this.getCoinData();
    this.setCurrency()
  }

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
                  Volume / MarketCap
                </StyledTableHeaderCell>
                <StyledTableHeaderCell>
                  Circulating / Total Supply
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
                      <StyledBullets>
                        <StyledBullet>
                          ${ConvertCurrency(coin.total_volume)}
                        </StyledBullet>
                        <StyledBullet>
                          ${ConvertCurrency(coin.market_cap)}
                        </StyledBullet>
                      </StyledBullets>
                      <ProgressBar
                        progress={(coin.total_volume / coin.market_cap) * 100}
                      />
                    </StyledTableCell>
                    <StyledTableCell>
                      <StyledBullets>
                        <StyledBullet>
                          ${ConvertCurrency(coin.circulating_supply)}
                        </StyledBullet>
                        <StyledBullet>
                          {coin.total_supply
                            ? "$" + ConvertCurrency(coin.total_supply)
                            : "n/a"}
                        </StyledBullet>
                      </StyledBullets>
                      <ProgressBar
                        progress={
                          (coin.circulating_supply / coin.total_supply) * 100
                        }
                      />
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
