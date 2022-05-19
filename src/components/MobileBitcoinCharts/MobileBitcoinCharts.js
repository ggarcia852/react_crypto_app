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
  ChartsWrapper,
  ChartContainer,
  StyledChart,
  StyledBarContainer,
  StyledButton,
  StyledBar,
  StyledHeading,
  StyledTitle,
  StyledAmount,
  StyledDate,
  Loader,
  StyledHeaderBox,
  StyledArrows,
} from "./styles";

const MobileBitcoinCharts = (props) => {
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
      <ChartsWrapper>
        <ChartContainer>
          <StyledChart>
            <StyledHeaderBox>
              <StyledHeading>
                <StyledTitle>Price</StyledTitle>
                <StyledAmount>
                  ${price?.toLocaleString() || "loading"}
                </StyledAmount>
                <StyledDate>{today}</StyledDate>
              </StyledHeading>
              <StyledArrows>{">"}</StyledArrows>
            </StyledHeaderBox>
            {props.isLoading && (
              <Loader>
                <Oval color="#06D554" ariaLabel="loading" />
              </Loader>
            )}
            {hasData && (
              <Line
                data={{
                  labels: chartData.prices.map((price) => ConvertDay(price[0])),
                  datasets: [
                    {
                      label: "Bitcoin Price",
                      data: chartData.prices.map((price) => price[1].toFixed()),
                      pointRadius: 0,
                      borderColor:
                        chartData.prices[0][1] <=
                        chartData.prices[chartData.prices.length - 1][1]
                          ? "#00FC2A"
                          : "#FE1040",
                      backgroundColor: props.theme ? "#1F2128" : "#FCFCFC",
                      fill: true,
                      tension: 0.3,
                      borderWidth: 2,
                    },
                  ],
                }}
                height={"100%"}
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
                      bottom: 15,
                    },
                  },
                }}
              />
            )}
          </StyledChart>
        </ChartContainer>
        <ChartContainer>
          <StyledChart>
            <StyledHeaderBox>
              <StyledHeading>
                <StyledTitle>Volume</StyledTitle>
                <StyledAmount>
                  ${CurrencyFormat(volume) || "loading..."}
                </StyledAmount>
                <StyledDate>{today}</StyledDate>
              </StyledHeading>
              <StyledArrows>{"<"}</StyledArrows>
            </StyledHeaderBox>
            {props.isLoading && (
              <Loader>
                <Oval color="#06D554" ariaLabel="loading..." />
              </Loader>
            )}
            {hasData && (
              <Bar
                data={{
                  labels: chartData.total_volumes.map((volume) =>
                    ConvertDay(volume[0])
                  ),
                  datasets: [
                    {
                      label: "Bitcoin Volume",
                      data: chartData.total_volumes.map((volume) => volume[1]),
                      backgroundColor: "#2550EA",
                      borderRadius: 5,
                    },
                  ],
                }}
                height={"100%"}
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
                      bottom: 15,
                    },
                  },
                }}
              />
            )}
          </StyledChart>
        </ChartContainer>
      </ChartsWrapper>
      <StyledBarContainer>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MobileBitcoinCharts);
