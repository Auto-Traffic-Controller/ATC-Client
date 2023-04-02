import { css } from "@emotion/react";
import { SectionTitle } from "../style";
import * as S from "./style";

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
    </S.TrafficSection>
  );
};

export default Traffic;
