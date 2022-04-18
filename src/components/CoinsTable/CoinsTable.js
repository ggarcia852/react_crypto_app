import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { connect } from "react-redux";
import { Oval } from "react-loader-spinner";
import { getCoins, coinsReset } from "store/coinsTable/action";
import { Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertCurrency, CurrencyFormat, RemoveNegative } from "../../utils";
import { ProgressBar } from "components";
import greenUp from "assets/greenUp.svg";
import redDown from "assets/redDown.svg";
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
  StyledBullets,
  StyledChart,
  Loader,
} from "./styles";
import {
  ColoredDiv,
  StyledPricePercentArrow,
} from "components/CoinPageInfo/styles";

const CoinData = (props) => {
  const [page, setPage] = useState(1);

  const fetchMoreData = () => {
    setTimeout(() => {
      props.getCoins(page);
      setPage(page + 1);
    }, 500);
  };

  useEffect(() => {
    props.coinsReset();
    props.getCoins(1);
    setPage(2);
    //eslint-disable-next-line
  }, [props.currency]);

  return (
    <>
      <StyledHeader>
        <StyledOverview>Market Overview</StyledOverview>
      </StyledHeader>
      {props.hasError && <div>Error loading coins.</div>}
      {props.coins && (
        <StyledCoinList>
          <InfiniteScroll
            dataLength={props.coins.length}
            next={fetchMoreData}
            hasMore={true}
            loader={
              <Loader>
                <Oval width="50" color="green" ariaLabel="loading" />
              </Loader>
            }
          >
            <StyledTable>
              <StyledTableHeader>
                <StyledTableHeaderCell>#</StyledTableHeaderCell>
                <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                <StyledTableHeaderCell>Price</StyledTableHeaderCell>
                <StyledTableHeaderCell>1h%</StyledTableHeaderCell>
                <StyledTableHeaderCell>24h%</StyledTableHeaderCell>
                <StyledTableHeaderCell>7d%</StyledTableHeaderCell>
                <StyledTableHeaderCell>Volume/MarketCap</StyledTableHeaderCell>
                <StyledTableHeaderCell>
                  Circulating/Total Supply
                </StyledTableHeaderCell>
                <StyledTableHeaderCell>Last 7d</StyledTableHeaderCell>
              </StyledTableHeader>
              <StyledTableBody>
                {props.coins &&
                  props.coins.map((coin) => (
                    <StyledTableRow key={coin.id}>
                      <StyledTableCell>{coin.market_cap_rank}</StyledTableCell>
                      <StyledTableCell>
                        <StyledCoinLink to={`/coin/${coin.id}`}>
                          <StyledImg src={coin.image} alt="coin"></StyledImg>
                          {coin.name} ({coin.symbol.toUpperCase()})
                        </StyledCoinLink>
                      </StyledTableCell>
                      <StyledTableCell>
                        ${CurrencyFormat(coin.current_price)}
                      </StyledTableCell>
                      <StyledTableCell
                        color={
                          coin.price_change_percentage_1h_in_currency >= 0
                            ? "#00FC2A"
                            : "#FE1040"
                        }
                      >
                        {coin.price_change_percentage_1h_in_currency >= 0 ? (
                          <StyledPricePercentArrow
                            src={greenUp}
                            alt="up arrow"
                          />
                        ) : (
                          <StyledPricePercentArrow
                            src={redDown}
                            alt="down arrow"
                          />
                        )}
                        {coin.price_change_percentage_1h_in_currency >= 0
                          ? coin.price_change_percentage_1h_in_currency?.toFixed(
                              2
                            )
                          : RemoveNegative(
                              coin.price_change_percentage_1h_in_currency?.toFixed(
                                2
                              )
                            )}
                        %
                      </StyledTableCell>
                      <StyledTableCell
                        color={
                          coin.price_change_percentage_24h >= 0
                            ? "#00FC2A"
                            : "#FE1040"
                        }
                      >
                        {coin.price_change_percentage_24h >= 0 ? (
                          <StyledPricePercentArrow
                            src={greenUp}
                            alt="up arrow"
                          />
                        ) : (
                          <StyledPricePercentArrow
                            src={redDown}
                            alt="down arrow"
                          />
                        )}
                        {coin.price_change_percentage_24h >= 0
                          ? coin.price_change_percentage_24h?.toFixed(2)
                          : RemoveNegative(
                              coin.price_change_percentage_24h?.toFixed(2)
                            )}
                        %
                      </StyledTableCell>
                      <StyledTableCell
                        color={
                          coin.price_change_percentage_7d_in_currency >= 0
                            ? "#00FC2A"
                            : "#FE1040"
                        }
                      >
                        {coin.price_change_percentage_7d_in_currency >= 0 ? (
                          <StyledPricePercentArrow
                            src={greenUp}
                            alt="up arrow"
                          />
                        ) : (
                          <StyledPricePercentArrow
                            src={redDown}
                            alt="down arrow"
                          />
                        )}
                        {coin.price_change_percentage_7d_in_currency >= 0
                          ? coin.price_change_percentage_7d_in_currency?.toFixed(
                              2
                            )
                          : RemoveNegative(
                              coin.price_change_percentage_7d_in_currency?.toFixed(
                                2
                              )
                            )}
                        %
                      </StyledTableCell>
                      <StyledTableCell>
                        <StyledBullets>
                          <ColoredDiv color={"#FFB528"}>
                            ${ConvertCurrency(coin.total_volume)}
                          </ColoredDiv>
                          <ColoredDiv color={"#E8D587"}>
                            ${ConvertCurrency(coin.market_cap)}
                          </ColoredDiv>
                        </StyledBullets>
                        <ProgressBar
                          background={"#FFB528"}
                          mainBackground={"#E8D587"}
                          progress={(coin.total_volume / coin.market_cap) * 100}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <StyledBullets>
                          <ColoredDiv color={"#FE7D43"}>
                            ${ConvertCurrency(coin.circulating_supply)}
                          </ColoredDiv>
                          <ColoredDiv color={"#FFDCCE"}>
                            {coin.max_supply
                              ? "$" + ConvertCurrency(coin.max_supply)
                              : "∞"}
                          </ColoredDiv>
                        </StyledBullets>
                        <ProgressBar
                          progress={
                            (coin.circulating_supply / coin.max_supply) * 100
                          }
                          background={"#FE7D43"}
                          mainBackground={"#FFDCCE"}
                        />
                      </StyledTableCell>
                      <StyledTableCell>
                        <StyledChart>
                          <Line
                            data={{
                              labels: coin.sparkline_in_7d.price.map(
                                (price, index) => index
                              ),
                              datasets: [
                                {
                                  data: coin.sparkline_in_7d.price,
                                  borderColor:
                                    coin.sparkline_in_7d.price[1] <=
                                    coin.sparkline_in_7d.price[
                                      coin.sparkline_in_7d.price.length - 1
                                    ]
                                      ? "#00FC2A"
                                      : "#FE1040",
                                  fill: false,
                                  tension: 0.5,
                                },
                              ],
                            }}
                            options={{
                              maintainAspectRatio: false,
                              legend: {
                                display: false,
                              },
                              plugins: {
                                legend: {
                                  display: false,
                                },
                              },
                              elements: {
                                point: {
                                  radius: 0,
                                },
                              },
                              scales: {
                                y: {
                                  display: false,
                                },
                                x: {
                                  display: false,
                                },
                              },
                            }}
                          />
                        </StyledChart>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
              </StyledTableBody>
            </StyledTable>
          </InfiniteScroll>
        </StyledCoinList>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.coinsTable.isLoading,
  hasError: state.coinsTable.hasError,
  coins: state.coinsTable.coins,
  currency: state.currency.currency,
});

const mapDispatchToProps = {
  getCoins,
  coinsReset,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoinData);
