import { css } from "@emotion/react";
import { SectionTitle } from "../style";
import * as S from "./style";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale, ScriptableContext } from "chart.js";

Chart.register(CategoryScale);

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
  ],
  datasets: [
    {
      label: "none",
      data: [
        5, 66, 33, 22, 11, 5, 66, 33, 22, 11, 5, 66, 33, 22, 11, 5, 66, 33, 22,
        11,
      ],
      fill: true,
      borderColor: "#57AC6D",
      borderWidth: 4,
      lineTension: 0.2,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 350);
        gradient.addColorStop(0, "#DEFFE6");
        gradient.addColorStop(1, "rgba(204, 230, 210, 0) ");
        return gradient;
      },
    },
  ],
};

const Traffic = () => {
  return (
    <S.TrafficSection>
      <S.SectionHeader>
        <SectionTitle>네트워크 사용량</SectionTitle>
        <S.TrafficCategoryWrap>
          <S.TrafficCategory>
            <S.TrafficValueCategory>Current</S.TrafficValueCategory>
            <S.TrafficValue>1.20M</S.TrafficValue>
          </S.TrafficCategory>
          <S.TrafficCategory>
            <S.TrafficValueCategory>Average</S.TrafficValueCategory>
            <S.TrafficValue>7.53M</S.TrafficValue>
          </S.TrafficCategory>
          <S.TrafficCategory
            css={css`
              margin-right: 0;
            `}
          >
            <S.TrafficValueCategory>Maximum</S.TrafficValueCategory>
            <S.TrafficValue>30.94M</S.TrafficValue>
          </S.TrafficCategory>
        </S.TrafficCategoryWrap>
      </S.SectionHeader>
      <S.ChartWrapper>
        <Line
          data={data}
          options={{
            scales: {
              x: {
                beginAtZero: true,
                display: false,
              },
            },
            elements: {
              point: {
                radius: 0,
                borderColor: "#57AC6D",
                backgroundColor: "#CCE6D2",
                hoverBorderWidth: 4,
                hoverRadius: 12,
              },
            },
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
          }}
        />
      </S.ChartWrapper>
    </S.TrafficSection>
  );
};

export default Traffic;
