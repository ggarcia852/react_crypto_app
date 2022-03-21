import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar, Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertCurrency, ConvertDay } from "utils";
import {
  StyledHeader,
  ChartsDiv,
  StyledCharts,
  StyledChart,
  StyledContainer,
  StyledButton,
  StyledBar,
  StyledHeading,
  StyledTitle,
  StyledAmount,
  StyledDate,
} from "./styles";

const BitcoinCharts = (props) => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [activeButton, setActiveButton] = useState(30);
  const [chartDays, setChartDays] = useState(30);
  const [chartInterval, setChartInterval] = useState("daily");

  const getChartData = async () => {
    try {
      setError(false);
      setLoading(true);
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${props.currency}&days=${chartDays}&interval=${chartInterval}`
      );
      setLoading(false);
      setChartData(data);
    } catch (err) {
      setLoading(false);
      setError(true);
    }
  };

  const chartButtons = [
    { id: 1, value: "1h", days: 1, interval: "hourly" },
    { id: 7, value: "7d", days: 7, interval: "hourly" },
    { id: 30, value: "30d", days: 30, interval: "daily" },
    { id: 90, value: "90d", days: 90, interval: "daily" },
    { id: 180, value: "180d", days: 180, interval: "daily" },
    { id: 365, value: "365d", days: 365, interval: "daily" },
  ];

  const handleClick = (button) => {
    setActiveButton(button.id);
    setChartInterval(button.interval);
    setChartDays(button.days);
  };

  useEffect(() => {
    getChartData();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    getChartData();
    //eslint-disable-next-line
  }, [chartDays, props.currency]);

  let today = new Date().toDateString();
  let price = chartData?.prices.slice(-1)[0].slice(-1)[0].toFixed(0);
  let volume = chartData?.total_volumes.slice(-1)[0].slice(-1)[0].toFixed(0);

  return (
    <>
      <StyledHeader>Bitcoin Overview</StyledHeader>
          {loading && <div>Loading data...</div>}
      <ChartsDiv>
        <StyledCharts>
          {error && <div>error on page</div>}
          {chartData && (
            <StyledChart>
              <StyledHeading>
                <StyledTitle>Price</StyledTitle>
                <StyledAmount>${price}</StyledAmount>
                <StyledDate>{today}</StyledDate>
              </StyledHeading>
              <Line
                data={{
                  labels: chartData.prices.map((price) => ConvertDay(price[0])),
                  datasets: [
                    {
                      label: "Bitcoin Price",
                      data: chartData.prices.map((price) => price[1].toFixed()),
                      pointRadius: 0,
                      borderColor: "#00FF5F",
                      backgroundColor: "#518665",
                      fill: true,
                      tension: 0.2,
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: false,
                      display: false,
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  layout: {
                    padding: {
                      left: 50,
                      right: 50,
                      bottom: 40,
                      top: 30,
                    },
                  },
                }}
              />
            </StyledChart>
          )}
        </StyledCharts>
        <StyledCharts>
          <StyledChart>
            <StyledHeading>
              <StyledTitle>Volume</StyledTitle>
              <StyledAmount>${ConvertCurrency(volume)}</StyledAmount>
              <StyledDate>{today}</StyledDate>
            </StyledHeading>
            {chartData && (
              <Bar
                data={{
                  labels: chartData.total_volumes.map((volume) =>
                    ConvertDay(volume[0])
                  ),
                  datasets: [
                    {
                      label: "Bitcoin Volume",
                      data: chartData.total_volumes.map((volume) => volume[1]),
                      backgroundColor: "#2172E5",
                      borderRadius: 5,
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: false,
                      display: false,
                    },
                  },
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  layout: {
                    padding: {
                      left: 50,
                      right: 50,
                      bottom: 40,
                      top: 30,
                    },
                  },
                }}
              />
            )}
          </StyledChart>
        </StyledCharts>
      </ChartsDiv>
      <StyledContainer>
        <StyledBar>
          {chartButtons.map((button) => (
            <StyledButton
              key={button.value}
              onClick={() => handleClick(button)}
              active={button.id === activeButton}
            >
              {button.value}
            </StyledButton>
          ))}
        </StyledBar>
      </StyledContainer>
    </>
  );
};

export default BitcoinCharts;

// export default class BitcoinChartData extends React.Component {
//   state = {
//     hasData: false,
//     isLoading: false,
//     hasError: false,
//     chartData: null,
//     chartDays: 30,
//     chartInterval: "daily",
//     activeButton: 30,
//   };

//   chartButtons = [
//     { id: 1, value: "1h", days: 1, interval: "hourly" },
//     { id: 7, value: "7d", days: 7, interval: "hourly" },
//     { id: 30, value: "30d", days: 30, interval: "daily" },
//     { id: 90, value: "90d", days: 90, interval: "daily" },
//     { id: 180, value: "180d", days: 180, interval: "daily" },
//     { id: 365, value: "365d", days: 365, interval: "daily" },
//   ];

//   getChartData = async () => {
//     const { chartDays, chartInterval } = this.state;
//     this.setState({ isLoading: true });
//     try {
//       const { data } = await axios(
//         `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${this.props.currency}&days=${chartDays}&interval=${chartInterval}`
//       );
//       this.setState({
//         hasData: true,
//         isLoading: false,
//         hasError: false,
//         chartData: data,
//       });
//     } catch (err) {
//       this.setState({
//         isLoading: false,
//         hasError: true,
//       });
//       console.log(err);
//     }
//   };

//   handleClick = (button) => {
//     this.setState({
//       chartDays: button.days,
//       chartInterval: button.interval,
//       activeButton: button.id,
//     });
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.chartDays !== prevState.chartDays) {
//       this.getChartData();
//     }
//     if (this.props.currency !== prevProps.currency) {
//       this.getChartData();
//     }
//   }

//   componentDidMount() {
//     this.getChartData();
//   }

//   render() {
//     const { hasData, hasError, isLoading, chartData } = this.state;
//     let today = new Date().toDateString();
//     let price = chartData?.prices.slice(-1)[0].slice(-1)[0].toFixed(0);
//     let volume = chartData?.total_volumes.slice(-1)[0].slice(-1)[0].toFixed(0);
//     return (
//       <>
//         <StyledHeader>Bitcoin Overview</StyledHeader>
//         <ChartsDiv>
//           <StyledCharts>
//             {isLoading && <div>Loading data...</div>}
//             {hasError && <div>error</div>}
//             {hasData && (
//               <StyledChart>
//                 <StyledHeading>
//                   <StyledTitle>Price</StyledTitle>
//                   <StyledAmount>${price}</StyledAmount>
//                   <StyledDate>{today}</StyledDate>
//                 </StyledHeading>
//                 <Line
//                   data={{
//                     labels: chartData.prices.map((price) =>
//                       ConvertDay(price[0])
//                     ),
//                     datasets: [
//                       {
//                         label: "Bitcoin Price",
//                         data: chartData.prices.map((price) =>
//                           price[1].toFixed()
//                         ),
//                         pointRadius: 0,
//                         borderColor: "#00FF5F",
//                         backgroundColor: "#518665",
//                         fill: true,
//                         tension: 0.2,
//                       },
//                     ],
//                   }}
//                   options={{
//                     scales: {
//                       y: {
//                         beginAtZero: false,
//                         display: false,
//                       },
//                     },
//                     plugins: {
//                       legend: {
//                         display: false,
//                       },
//                     },
//                     layout: {
//                       padding: {
//                         left: 50,
//                         right: 50,
//                         bottom: 40,
//                         top: 30,
//                       },
//                     },
//                   }}
//                 />
//               </StyledChart>
//             )}
//           </StyledCharts>
//           <StyledCharts>
//             <StyledChart>
//               <StyledHeading>
//                 <StyledTitle>Volume</StyledTitle>
//                 <StyledAmount>${ConvertCurrency(volume)}</StyledAmount>
//                 <StyledDate>{today}</StyledDate>
//               </StyledHeading>
//               {hasData && (
//                 <Bar
//                   data={{
//                     labels: chartData.total_volumes.map((volume) =>
//                       ConvertDay(volume[0])
//                     ),
//                     datasets: [
//                       {
//                         label: "Bitcoin Volume",
//                         data: chartData.total_volumes.map(
//                           (volume) => volume[1]
//                         ),
//                         backgroundColor: "#2172E5",
//                         borderRadius: 5,
//                       },
//                     ],
//                   }}
//                   options={{
//                     scales: {
//                       y: {
//                         beginAtZero: false,
//                         display: false,
//                       },
//                     },
//                     plugins: {
//                       legend: {
//                         display: false,
//                       },
//                     },
//                     layout: {
//                       padding: {
//                         left: 50,
//                         right: 50,
//                         bottom: 40,
//                         top: 30,
//                       },
//                     },
//                   }}
//                 />
//               )}
//             </StyledChart>
//           </StyledCharts>
//         </ChartsDiv>
//         <StyledContainer>
//           <StyledBar>
//             {this.chartButtons.map((button) => (
//               <StyledButton
//                 key={button.value}
//                 onClick={() => this.handleClick(button)}
//                 active={button.id === this.state.activeButton}
//               >
//                 {button.value}
//               </StyledButton>
//             ))}
//           </StyledBar>
//         </StyledContainer>
//       </>
//     );
//   }
// }
