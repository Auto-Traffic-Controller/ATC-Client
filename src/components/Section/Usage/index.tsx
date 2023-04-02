import { GoodStatus } from "assets";
import { SectionTitle } from "components/Section/style";
import { useState } from "react";
import * as S from "./style";

const Usage = () => {
  const status = "보통";
  const [usagePercentage, setUsagePercntage] = useState(50);

  return (
    <S.UsageSection>
      <SectionTitle>CPU 사용량</SectionTitle>
      <S.UsageChart fillColor="#919BF3" percentage={usagePercentage}>
        <S.UsagePercentage>{usagePercentage}%</S.UsagePercentage>
      </S.UsageChart>
      <S.StatusBox>
        <S.StatusIconWrap>
          <GoodStatus />
          <S.StatusIconText>보통</S.StatusIconText>
        </S.StatusIconWrap>
        <S.StatusDescription>
          CPU 사용량이 증가하면 시스템 성능저하가 일어날 수 있습니다.
        </S.StatusDescription>
      </S.StatusBox>
    </S.UsageSection>
  );
};

export default Usage;
