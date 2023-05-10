import { css } from "@emotion/react";
import { SectionTitle } from "../style";
import * as S from "./style";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale, ScriptableContext } from "chart.js";
import { useGetNetworkPackets } from "apis/metric";

Chart.register(CategoryScale);

const Traffic = () => {
  const { networkPackets } = useGetNetworkPackets();

  const data = {
    labels: networkPackets?.map((data) => data.timestamp),
    datasets: [
      {
        label: "Usage",
        data: networkPackets?.map((data) => data.packet),
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

  const current = networkPackets[0]?.packet ?? 0;

  const average = Math.round(
    networkPackets
      .map((value) => value.packet)
      .reduce((value, current) => {
        return current + value;
      }, 0) / 60
  );

  const maximum = Math.max(...networkPackets.map((value) => value.packet));

  const unitConversion = (value: number) => {
    const forMB = 1048576;
    const forKB = 1024;

    if (value >= forMB) {
      return Math.round(value / forMB) + "MB";
    } else if (value >= forKB) {
      return Math.round(value / forKB) + "KB";
    } else {
      return value + "B";
    }
  };

  return (
    <S.TrafficSection>
      <S.SectionHeader>
        <SectionTitle>네트워크 사용량</SectionTitle>
        <S.TrafficCategoryWrap>
          <S.TrafficCategory>
            <S.TrafficValueCategory>Current</S.TrafficValueCategory>
            <S.TrafficValue>{unitConversion(current)}</S.TrafficValue>
          </S.TrafficCategory>
          <S.TrafficCategory>
            <S.TrafficValueCategory>Average</S.TrafficValueCategory>
            <S.TrafficValue>{unitConversion(average)}</S.TrafficValue>
          </S.TrafficCategory>
          <S.TrafficCategory
            css={css`
              margin-right: 0;
            `}
          >
            <S.TrafficValueCategory>Maximum</S.TrafficValueCategory>
            <S.TrafficValue>{unitConversion(maximum)}</S.TrafficValue>
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
                hoverBorderWidth: 5,
                hoverRadius: 10,
              },
            },
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            hover: {
              intersect: false,
            },
          }}
        />
      </S.ChartWrapper>
    </S.TrafficSection>
  );
};

export default Traffic;
