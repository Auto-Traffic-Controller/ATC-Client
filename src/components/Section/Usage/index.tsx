import { GoodStatus } from "assets";
import { SectionTitle } from "components/Section/style";
import * as S from "./style";

const Usage = () => {
  const status = "보통";

  return (
    <S.UsageSection>
      <SectionTitle>CPU 사용량</SectionTitle>
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
