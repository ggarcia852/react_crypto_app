import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Oval } from "react-loader-spinner";
import { getMarketCharts } from "store/coinPageData/actions";
import { Line } from "react-chartjs-2";
//eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { ConvertDate } from "utils";
import {
  StyledChart,
  StyledDayContainer,
  StyledLabel,
  StyledButtonInput,
  Loader,
} from "./styles";

function MarketChart(props) {
  const [chartDays, setChartDays] = useState("30");

  useEffect(() => {
    props.getMarketCharts(props.match.params.coinId, chartDays);
    // eslint-disable-next-line
  }, [chartDays, props.match.params.coinId, props.currency]);

  const handleChange = (e) => {
    setChartDays(e.target.value);
  };

  const hasChartData = !props.marketChartsLoading && props.chartData;
  const chartData = props.chartData;

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
          <StyledLabel htmlFor="1">1d</StyledLabel>
          <StyledButtonInput
            type="radio"
            name="days"
            value="7"
            checked={chartDays === "7"}
            onChange={handleChange}
          />
          <StyledLabel htmlFor="7">7d</StyledLabel>
          <StyledButtonInput
            type="radio"
            name="days"
            value="30"
            checked={chartDays === "30"}
            onChange={handleChange}
          />
          <StyledLabel htmlFor="30">30d</StyledLabel>
          <StyledButtonInput
            type="radio"
            name="days"
            value="90"
            checked={chartDays === "90"}
            onChange={handleChange}
          />
          <StyledLabel htmlFor="90">90d</StyledLabel>
          <StyledButtonInput
            type="radio"
            name="days"
            value="365"
            checked={chartDays === "365"}
            onChange={handleChange}
          />
          <StyledLabel htmlFor="1y">1y</StyledLabel>
          <StyledButtonInput
            type="radio"
            name="days"
            value="max"
            checked={chartDays === "max"}
            onChange={handleChange}
          />
          <StyledLabel htmlFor="max">Max</StyledLabel>
        </div>
      </StyledDayContainer>
      <StyledChart>
        {props.marketChartsLoading && (
          <Loader>
            <Oval
              height="75"
              width="100"
              color="#06D554"
              ariaLabel="loading"
            />
          </Loader>
        )}
        {props.marketChartsError && <div>Error loading chart</div>}
        {hasChartData && (
          <div>
            <Line
              data={{
                labels: chartData.prices.map((price) => ConvertDate(price[0])),
                datasets: [
                  {
                    label: "Price",
                    data: chartData.prices.map((price) => price[1]),
                    pointRadius: 0,
                    borderColor:
                      chartData.prices[0][1] <=
                      chartData.prices[chartData.prices.length - 1][1]
                        ? "#00FC2A"
                        : "#FE1040",
                    backgroundColor: props.theme ? "#1F2128" : "#FCFCFC",
                    fill: true,
                    tension: 0.1,
                    borderWidth: 2,
                  },
                ],
              }}
              // height={"300px"}
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

const mapStateToProps = (state) => ({
  chartData: state.coinPage.chartData,
  marketChartsLoading: state.coinPage.marketChartsLoading,
  marketChartsError: state.coinPage.marketChartsError,
  currency: state.currency.currency,
  theme: state.theme.darkTheme,
});

const mapDispatchToProps = {
  getMarketCharts,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketChart);
