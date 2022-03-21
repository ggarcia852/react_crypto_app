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

  useEffect(() => {
    getChartData();
    // eslint-disable-next-line
  }, [chartDays, props.currency]);

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

  let today = new Date().toDateString();
  let price = chartData?.prices.slice(-1)[0].slice(-1)[0].toFixed(0);
  let volume = chartData?.total_volumes.slice(-1)[0].slice(-1)[0].toFixed(0);

  return (
    <>
      <StyledHeader>
        Bitcoin Overview
        {loading && <span> (Loading charts...)</span>}
      </StyledHeader>
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
