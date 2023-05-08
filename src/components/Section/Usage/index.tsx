import { BadStatus, GoodStatus, NormalStatus } from "assets";
import { SectionTitle } from "components/Section/style";
import { useEffect, useState } from "react";
import * as S from "./style";
import { useGetCPUUsage } from "apis/metric";

type StatusType = "좋음" | "보통" | "나쁨";

interface StatusIconProps {
  status: StatusType;
}

const StatusIcon: React.FC<StatusIconProps> = ({ status }) => {
  switch (status) {
    case "좋음":
      return <GoodStatus />;
    case "보통":
      return <NormalStatus />;
    case "나쁨":
      return <BadStatus />;
  }
};

const Usage = () => {
  const [status, setStatus] = useState<StatusType>("보통");
  const { cpuUsage } = useGetCPUUsage();

  useEffect(() => {
    cpuUsage &&
      setStatus(cpuUsage > 70 ? "나쁨" : cpuUsage > 30 ? "보통" : "좋음");
  }, [cpuUsage]);

  return (
    <S.UsageSection>
      <SectionTitle>CPU 사용량</SectionTitle>
      <S.UsageChart
        fillColor={chartFillColor(status)}
        percentage={cpuUsage ?? 0}
      >
        <S.ChartDecorate>
          <S.UsagePercentage>{cpuUsage ?? 0}%</S.UsagePercentage>
        </S.ChartDecorate>
      </S.UsageChart>
      <S.StatusBox>
        <S.StatusIconWrap>
          <StatusIcon status={status} />
          <S.StatusIconText>{status}</S.StatusIconText>
        </S.StatusIconWrap>
        <S.StatusDescription>
          CPU 사용량이 증가하면 시스템 성능저하가 일어날 수 있습니다.
        </S.StatusDescription>
      </S.StatusBox>
    </S.UsageSection>
  );
};

const chartFillColor = (status: StatusType) => {
  switch (status) {
    case "좋음":
      return "#919BF3";
    case "보통":
      return "#F3CC91";
    case "나쁨":
      return "#F39191";
  }
};

export default Usage;
