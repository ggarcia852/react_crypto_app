import React, { useState, useEffect } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertDate } from "../../utils";
import { StyledChart, StyledDayContainer, StyledButtonInput } from "./styles";

export default function CoinChart(props) {
  const [chartData, setChartData] = useState(null);
  const [chartDays, setChartDays] = useState(30);

  const getChartData = async (coin, currency) => {
    try {
      const { data } = await axios(
        `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=${currency}&days=${chartDays}`
      );
      setChartData(data);
    } catch (err) {
      //   setError(true);
    }
  };

  const handleChange = (e) => {
    setChartDays(e.target.value);
  };

  useEffect(() => {
    getChartData(props.match.params.coinId, props.currency);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getChartData(props.match.params.coinId, props.currency);
    // eslint-disable-next-line
  }, [chartDays, props.match.params.coinId, props.currency]);

  return (
    <>
      <StyledDayContainer>
        <div>
          <StyledButtonInput
            type="radio"
            name="days"
            value="1"
            checked={chartDays === "1"}
            onChange={handleChange}
          />
          <label htmlFor="1">1d</label>
          <StyledButtonInput
            type="radio"
            name="days"
            value="7"
            checked={chartDays === "7"}
            onChange={handleChange}
          />
          <label htmlFor="7">7d</label>
          <StyledButtonInput
            type="radio"
            name="days"
            value="30"
            checked={chartDays === "30"}
            onChange={handleChange}
          />
          <label htmlFor="30">30d</label>
          <StyledButtonInput
            type="radio"
            name="days"
            value="90"
            checked={chartDays === "90"}
            onChange={handleChange}
          />
          <label htmlFor="90">90d</label>
          <StyledButtonInput
            type="radio"
            name="days"
            value="365"
            checked={chartDays === "365"}
            onChange={handleChange}
          />
          <label htmlFor="1y">1y</label>
          <StyledButtonInput
            type="radio"
            name="days"
            value="max"
            checked={chartDays === "max"}
            onChange={handleChange}
          />
          <label htmlFor="max">Max</label>
        </div>
      </StyledDayContainer>
      <StyledChart>
        {chartData && (
          <div>
            <Line
              data={{
                labels: chartData.prices.map((price) => ConvertDate(price[0])),
                datasets: [
                  {
                    label: "Price",
                    data: chartData.prices.map((price) => price[1]),
                    pointRadius: 0,
                    borderColor: "#707070",
                    backgroundColor: "#191B1F",
                    fill: true,
                    tension: 0.4,
                  },
                ],
              }}
              height={"350px"}
              options={{
                maintainAspectRatio: false,
                scales: {
                  y: {
                    display: false,
                  },
                  x: {
                    display: false,
                  },
                },
                plugins: {
                  legend: {
                    display: false,
                  },
                },
              }}
            />
          </div>
        )}
      </StyledChart>
    </>
  );
}
