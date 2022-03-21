import React, { useState, useEffect } from "react";
// import { render } from "react-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import { Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertCurrency, RemoveNegative } from "../../utils";
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
} from "./styles";
import { ColoredDiv, StyledPricePercentArrow } from "pages/CoinPage/styles";

const CoinData = (props) => {
  const [coins, setCoins] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  const getCoinData = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&order=market_cap_desc&per_page=25&page=${page}&sparkline=true&price_change_percentage=1h%2C%2024h%2C7d`
      );
      if (!coins) {
          setCoins(data);
          setPage(page +1 );
          setLoading(false);
        }
        else {
          setCoins(coins.concat(data));
          setPage(page + 1);
          setLoading(false);
        }
      }
     catch (err) {
        setLoading(false);
        setError(true);
  }
};

  const getNewData = async () => {
    setLoading(true);
    setError(false);
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${props.currency}&order=market_cap_desc&per_page=25&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C7d`
      );
          setCoins(data)
          setLoading(false);
          setPage(page + 1);
    } catch (err) {
        setLoading(false);
        setError(true);
    }
  };

  const fetchMoreData = () => {
    setTimeout(() => {
      getCoinData();
    }, 1500);
  };

  useEffect(() => {
    setCoins(null);
    setPage(1);
    getNewData();
    //eslint-disable-next-line
  }, [props.currency])

  useEffect(() => {
    getCoinData();
    //eslint-disable-next-line
  }, [])

  return (
    <>
      {loading && <div>Loading data...</div>}
      <StyledHeader>
        <StyledOverview>Market Overview</StyledOverview>
      </StyledHeader>
      <StyledCoinList>
        {error && <div>error on page</div>}
        {coins && (
          <div>
          <InfiniteScroll
            dataLength={coins?.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<div>Loading more coins...</div>}
          >
            <StyledTable>
              <StyledTableHeader>
                <StyledTableHeaderCell>#</StyledTableHeaderCell>
                <StyledTableHeaderCell>Name</StyledTableHeaderCell>
                <StyledTableHeaderCell>Price</StyledTableHeaderCell>
                <StyledTableHeaderCell>1h%</StyledTableHeaderCell>
                <StyledTableHeaderCell>24h%</StyledTableHeaderCell>
                <StyledTableHeaderCell>7d%</StyledTableHeaderCell>
                <StyledTableHeaderCell>
                  Volume/MarketCap
                </StyledTableHeaderCell>
                <StyledTableHeaderCell>
                  Circulating/Total Supply
                </StyledTableHeaderCell>
                <StyledTableHeaderCell>Last 7d</StyledTableHeaderCell>
              </StyledTableHeader>
              <StyledTableBody>
                {coins &&
                  coins.map((coin) => (
                    <StyledTableRow key={coin.id}>
                      <StyledTableCell>
                        {coin.market_cap_rank}
                      </StyledTableCell>
                      <StyledTableCell>
                        <StyledCoinLink to={`/coin/${coin.id}`}>
                          <StyledImg src={coin.image} alt="coin"></StyledImg>
                          {coin.name} ({coin.symbol.toUpperCase()})
                        </StyledCoinLink>
                      </StyledTableCell>
                      <StyledTableCell>${coin.current_price}</StyledTableCell>
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
                          ? coin.price_change_percentage_1h_in_currency.toFixed(
                              2
                            )
                          : RemoveNegative(
                              coin.price_change_percentage_1h_in_currency.toFixed(
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
                          ? coin.price_change_percentage_24h.toFixed(2)
                          : RemoveNegative(
                              coin.price_change_percentage_24h.toFixed(2)
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
                          ? coin.price_change_percentage_7d_in_currency.toFixed(
                              2
                            )
                          : RemoveNegative(
                              coin.price_change_percentage_7d_in_currency.toFixed(
                                2
                              )
                            )}
                        %
                      </StyledTableCell>
                      <StyledTableCell>
                        <StyledBullets>
                          <ColoredDiv color={"#FFB528"} >${ConvertCurrency(coin.total_volume)}</ColoredDiv>
                          <ColoredDiv color={"#E8D587"} >${ConvertCurrency(coin.market_cap)}</ColoredDiv>
                        </StyledBullets>
                        <ProgressBar
                          background={"#FFB528"}
                          mainBackground={"#E8D587"}
                          progress={
                            (coin.total_volume / coin.market_cap) * 100
                          }
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
                            (coin.circulating_supply / coin.max_supply) *
                            100
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
                                    coin.sparkline_in_7d.price.slice(0, 1) <
                                    coin.sparkline_in_7d.price.slice(-1)
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
          </div>
        )}
      </StyledCoinList>
    </>
  );
}

export default CoinData;
// render(<CoinData />, document.getElementById("root"));

// export default class CoinData extends React.Component {
//   state = {
//     hasData: false,
//     isLoading: false,
//     hasError: false,
//     items: null,
//     hasMore: true,
//     page: 1,
//   };

//   getCoinData = async () => {
//     this.setState({ isLoading: true });
//     try {
//       const { data } = await axios(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currency}&order=market_cap_desc&per_page=25&page=${this.state.page}&sparkline=true&price_change_percentage=1h%2C%2024h%2C7d`
//       );
//       if (!this.state.items) {
//         this.setState({
//           hasData: true,
//           isLoading: false,
//           hasError: false,
//           items: data,
//           page: this.state.page + 1,
//         });
//       } else {
//         this.setState({
//           items: this.state.items.concat(data),
//           page: this.state.page + 1,
//           isLoading: false,
//           hasError: false,
//         });
//       }
//     } catch (err) {
//       this.setState({
//         isLoading: false,
//         hasError: true,
//       });
//       console.log(err);
//     }
//   };

//   getNewData = async () => {
//     this.setState({ isLoading: true });
//     try {
//       const { data } = await axios(
//         `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${this.props.currency}&order=market_cap_desc&per_page=25&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C7d`
//       );
//         this.setState({
//           hasData: true,
//           isLoading: false,
//           hasError: false,
//           items: data,
//           page: this.state.page + 1,
//         });
//     } catch (err) {
//       this.setState({
//         isLoading: false,
//         hasError: true,
//       });
//       console.log(err);
//     }
//   }

//   fetchMoreData = () => {
//     setTimeout(() => {
//       this.getCoinData();
//     }, 1500);
//   };

//   componentDidUpdate(prevProps) {
//     if (this.props.currency !== prevProps.currency) {
//       this.setState({ items: null, page: 1 })
//       this.getNewData();
//     }
//   }

//   componentDidMount() {
//     this.getCoinData();
//   }

//   render() {
//     const { hasData, hasError, isLoading, items } = this.state;
//     return (
//       <>
//         {isLoading && <div>Loading data...</div>}
//         <StyledHeader>
//           <StyledOverview>Market Overview</StyledOverview>
//         </StyledHeader>
//         <StyledCoinList>
//           {hasError && <div>error</div>}
//           {hasData && (
//             <div>
//             <InfiniteScroll
//               dataLength={this.state.items?.length}
//               next={this.fetchMoreData}
//               hasMore={true}
//               loader={<div>Loading more coins...</div>}
//             >
//               <StyledTable>
//                 <StyledTableHeader>
//                   <StyledTableHeaderCell>#</StyledTableHeaderCell>
//                   <StyledTableHeaderCell>Name</StyledTableHeaderCell>
//                   <StyledTableHeaderCell>Price</StyledTableHeaderCell>
//                   <StyledTableHeaderCell>1h%</StyledTableHeaderCell>
//                   <StyledTableHeaderCell>24h%</StyledTableHeaderCell>
//                   <StyledTableHeaderCell>7d%</StyledTableHeaderCell>
//                   <StyledTableHeaderCell>
//                     Volume/MarketCap
//                   </StyledTableHeaderCell>
//                   <StyledTableHeaderCell>
//                     Circulating/Total Supply
//                   </StyledTableHeaderCell>
//                   <StyledTableHeaderCell>Last 7d</StyledTableHeaderCell>
//                 </StyledTableHeader>
//                 <StyledTableBody>
//                   {this.state.items &&
//                     items.map((coin) => (
//                       <StyledTableRow key={coin.id}>
//                         <StyledTableCell>
//                           {coin.market_cap_rank}
//                         </StyledTableCell>
//                         <StyledTableCell>
//                           <StyledCoinLink to={`/coin/${coin.id}`}>
//                             <StyledImg src={coin.image} alt="coin"></StyledImg>
//                             {coin.name} ({coin.symbol.toUpperCase()})
//                           </StyledCoinLink>
//                         </StyledTableCell>
//                         <StyledTableCell>${coin.current_price}</StyledTableCell>
//                         <StyledTableCell
//                           color={
//                             coin.price_change_percentage_1h_in_currency >= 0
//                               ? "#00FC2A"
//                               : "#FE1040"
//                           }
//                         >
//                           {coin.price_change_percentage_1h_in_currency >= 0 ? (
//                             <StyledPricePercentArrow
//                               src={greenUp}
//                               alt="up arrow"
//                             />
//                           ) : (
//                             <StyledPricePercentArrow
//                               src={redDown}
//                               alt="down arrow"
//                             />
//                           )}
//                           {coin.price_change_percentage_1h_in_currency >= 0
//                             ? coin.price_change_percentage_1h_in_currency.toFixed(
//                                 2
//                               )
//                             : RemoveNegative(
//                                 coin.price_change_percentage_1h_in_currency.toFixed(
//                                   2
//                                 )
//                               )}
//                           %
//                         </StyledTableCell>
//                         <StyledTableCell
//                           color={
//                             coin.price_change_percentage_24h >= 0
//                               ? "#00FC2A"
//                               : "#FE1040"
//                           }
//                         >
//                           {coin.price_change_percentage_24h >= 0 ? (
//                             <StyledPricePercentArrow
//                               src={greenUp}
//                               alt="up arrow"
//                             />
//                           ) : (
//                             <StyledPricePercentArrow
//                               src={redDown}
//                               alt="down arrow"
//                             />
//                           )}
//                           {coin.price_change_percentage_24h >= 0
//                             ? coin.price_change_percentage_24h.toFixed(2)
//                             : RemoveNegative(
//                                 coin.price_change_percentage_24h.toFixed(2)
//                               )}
//                           %
//                         </StyledTableCell>
//                         <StyledTableCell
//                           color={
//                             coin.price_change_percentage_7d_in_currency >= 0
//                               ? "#00FC2A"
//                               : "#FE1040"
//                           }
//                         >
//                           {coin.price_change_percentage_7d_in_currency >= 0 ? (
//                             <StyledPricePercentArrow
//                               src={greenUp}
//                               alt="up arrow"
//                             />
//                           ) : (
//                             <StyledPricePercentArrow
//                               src={redDown}
//                               alt="down arrow"
//                             />
//                           )}
//                           {coin.price_change_percentage_7d_in_currency >= 0
//                             ? coin.price_change_percentage_7d_in_currency.toFixed(
//                                 2
//                               )
//                             : RemoveNegative(
//                                 coin.price_change_percentage_7d_in_currency.toFixed(
//                                   2
//                                 )
//                               )}
//                           %
//                         </StyledTableCell>
//                         <StyledTableCell>
//                           <StyledBullets>
//                             <ColoredDiv color={"#FFB528"} >${ConvertCurrency(coin.total_volume)}</ColoredDiv>
//                             <ColoredDiv color={"#E8D587"} >${ConvertCurrency(coin.market_cap)}</ColoredDiv>
//                           </StyledBullets>
//                           <ProgressBar
//                             background={"#FFB528"}
//                             mainBackground={"#E8D587"}
//                             progress={
//                               (coin.total_volume / coin.market_cap) * 100
//                             }
//                             />
//                         </StyledTableCell>
//                         <StyledTableCell>
//                           <StyledBullets>
//                             <ColoredDiv color={"#FE7D43"}>
//                               ${ConvertCurrency(coin.circulating_supply)}
//                             </ColoredDiv>
//                             <ColoredDiv color={"#FFDCCE"}>
//                               {coin.max_supply
//                                 ? "$" + ConvertCurrency(coin.max_supply)
//                                 : "∞"}
//                             </ColoredDiv>
//                           </StyledBullets>
//                           <ProgressBar
//                             progress={
//                               (coin.circulating_supply / coin.max_supply) *
//                               100
//                             }
//                             background={"#FE7D43"}
//                             mainBackground={"#FFDCCE"}
//                           />
//                         </StyledTableCell>
//                         <StyledTableCell>
//                           <StyledChart>
//                             <Line
//                               data={{
//                                 labels: coin.sparkline_in_7d.price.map(
//                                   (price, index) => index
//                                 ),
//                                 datasets: [
//                                   {
//                                     data: coin.sparkline_in_7d.price,
//                                     borderColor:
//                                       coin.sparkline_in_7d.price.slice(0, 1) <
//                                       coin.sparkline_in_7d.price.slice(-1)
//                                         ? "#00FC2A"
//                                         : "#FE1040",
//                                     fill: false,
//                                     tension: 0.5,
//                                   },
//                                 ],
//                               }}
//                               options={{
//                                 maintainAspectRatio: false,
//                                 legend: {
//                                   display: false,
//                                 },
//                                 plugins: {
//                                   legend: {
//                                     display: false,
//                                   },
//                                 },
//                                 elements: {
//                                   point: {
//                                     radius: 0,
//                                   },
//                                 },
//                                 scales: {
//                                   y: {
//                                     display: false,
//                                   },
//                                   x: {
//                                     display: false,
//                                   },
//                                 },
//                               }}
//                             />
//                           </StyledChart>
//                         </StyledTableCell>
//                       </StyledTableRow>
//                     ))}
//                 </StyledTableBody>
//               </StyledTable>
//             </InfiniteScroll>
//             </div>
//           )}
//         </StyledCoinList>
//       </>
//     );
//   }
// }

