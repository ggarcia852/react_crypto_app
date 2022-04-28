import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getBitcoinCharts } from "store/bitcoinCharts/actions";
import { Bar, Line } from "react-chartjs-2";
import { Oval } from "react-loader-spinner";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertDay, CurrencyFormat } from "utils";
import {
  StyledHeader,
  ChartsContainer,
  StyledCharts,
  StyledChart,
  StyledBarContainer,
  StyledButton,
  StyledBar,
  StyledHeading,
  StyledTitle,
  StyledAmount,
  StyledDate,
  Loader,
} from "./styles";

const BitcoinCharts = (props) => {
  const [activeButton, setActiveButton] = useState(30);
  const [chartDays, setChartDays] = useState(30);
  const [chartInterval, setChartInterval] = useState("daily");

  useEffect(() => {
    props.getBitcoinCharts(chartDays, chartInterval);
    // eslint-disable-next-line
  }, [chartDays, props.currency]);

  const handleClick = (button) => {
    setActiveButton(button.id);
    setChartInterval(button.interval);
    setChartDays(button.days);
  };

  const chartButtons = [
    { id: 1, value: "1h", days: 1, interval: "hourly" },
    { id: 7, value: "7d", days: 7, interval: "hourly" },
    { id: 30, value: "30d", days: 30, interval: "daily" },
    { id: 90, value: "90d", days: 90, interval: "daily" },
    { id: 180, value: "180d", days: 180, interval: "daily" },
    { id: 365, value: "365d", days: 365, interval: "daily" },
  ];

  let today = new Date().toDateString().slice(3);
  let price = props.chartData?.prices.slice(-1)[0].slice(-1)[0];
  let volume = props.chartData?.total_volumes
    .slice(-1)[0]
    .slice(-1)[0]
    .toFixed(0);
  const chartData = props.chartData;
  const hasData = !props.isLoading && props.chartData;

  return (
    <>
      <StyledHeader>Bitcoin Overview</StyledHeader>
      {props.hasError && <div>error on page</div>}
      <ChartsContainer>
        <StyledCharts>
          {props.isLoading && (
            <Loader>
              <Oval
                height="100"
                width="100"
                color="#06D554"
                ariaLabel="loading"
              />
            </Loader>
          )}
          {hasData && (
            <StyledChart>
              <StyledHeading>
                <StyledTitle>Price</StyledTitle>
                <StyledAmount>${price.toLocaleString()}</StyledAmount>
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
                      borderColor: props.theme ? "#0DE65E" : "#2550EA",
                      backgroundColor: props.theme ? "#1F2128" : "#FCFCFC",
                      fill: true,
                      tension: 0.3,
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
                      left: 25,
                      right: 25,
                      bottom: 25,
                    },
                  },
                }}
              />
            </StyledChart>
          )}
        </StyledCharts>
        <StyledCharts>
          {props.isLoading && (
            <Loader>
              <Oval
                height="100"
                width="100"
                color="#06D554"
                ariaLabel="loading"
              />
            </Loader>
          )}
          {hasData && (
            <StyledChart>
              <StyledHeading>
                <StyledTitle>Volume</StyledTitle>
                <StyledAmount>${CurrencyFormat(volume)}</StyledAmount>
                <StyledDate>{today}</StyledDate>
              </StyledHeading>
              <Bar
                data={{
                  labels: chartData.total_volumes.map((volume) =>
                    ConvertDay(volume[0])
                  ),
                  datasets: [
                    {
                      label: "Bitcoin Volume",
                      data: chartData.total_volumes.map((volume) => volume[1]),
                      backgroundColor: props.theme ? "#2550EA" : "#0DE65E",
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
                      left: 25,
                      right: 25,
                      bottom: 25,
                    },
                  },
                }}
              />
            </StyledChart>
          )}
        </StyledCharts>
      </ChartsContainer>
      <StyledBarContainer>
        <StyledBar>
          {/* <div> */}
          {chartButtons.map((button) => (
            <StyledButton
              key={button.value}
              onClick={() => handleClick(button)}
              active={button.id === activeButton}
            >
              {button.value}
            </StyledButton>
          ))}
          {/* </div> */}
        </StyledBar>
      </StyledBarContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  chartData: state.bitcoinCharts.chartData,
  isLoading: state.bitcoinCharts.isLoading,
  hasError: state.bitcoinCharts.hasError,
  currency: state.currency,
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  getBitcoinCharts,
};

export default connect(mapStateToProps, mapDispatchToProps)(BitcoinCharts);
