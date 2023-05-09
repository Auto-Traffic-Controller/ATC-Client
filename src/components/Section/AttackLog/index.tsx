import { SectionTitle } from "components/Section/style";
import * as S from "./style";
import { css } from "@emotion/react";
import { useState } from "react";
import { useGetAttackLog } from "apis/attack";
import { timeFormatting } from "libs/timeFormatting";

type NewOrOld = "new" | "old";

const AttackLog: React.FC = () => {
  const { attackLog } = useGetAttackLog();
  const [newOrOld, setNewOrOld] = useState<NewOrOld>("new");
  const [selectAttackType, setSelectAttackType] = useState<string>("");
  const attckType = new Set<string>();

  // make set data
  attackLog.forEach(({ attack_type }) => attckType.add(attack_type));

  const selectStyle = (selectedItem: NewOrOld) =>
    newOrOld === selectedItem &&
    css`
      background: #cce6d2;
      color: #49935c;
    `;

  return (
    <S.AttackLogSection>
      <S.SectionHeader>
        <SectionTitle>공격 로그</SectionTitle>
        <S.FilterWrap>
          <S.NewOrOldButton
            onClick={() => setNewOrOld("new")}
            css={selectStyle("new")}
          >
            최신
          </S.NewOrOldButton>
          <S.NewOrOldButton
            onClick={() => setNewOrOld("old")}
            css={selectStyle("old")}
          >
            오래된
          </S.NewOrOldButton>
          <S.AttackTypeFilter
            onChange={(e) => setSelectAttackType(e.target.value)}
          >
            <option value="">공격유형</option>
            {[...attckType].map((data, index) => (
              <option key={index} value={data}>
                {data}
              </option>
            ))}
          </S.AttackTypeFilter>
        </S.FilterWrap>
      </S.SectionHeader>
      <S.ListHeader>
        <S.ListHeaderText>IP 주소</S.ListHeaderText>
        <S.ListHeaderText>공격 유형</S.ListHeaderText>
        <S.ListHeaderText
          css={css`
            text-align: end;
          `}
        >
          시간
        </S.ListHeaderText>
      </S.ListHeader>
      <S.ListWrapper>
        {(newOrOld === "new" ? attackLog : [...attackLog].reverse())
          .filter(({ attack_type }) =>
            selectAttackType ? attack_type === selectAttackType : true
          )
          .map((data, index) => (
            <S.ListElement key={index}>
              <S.ListElementText>{data.ip}</S.ListElementText>
              <S.ListElementText>{data.attack_type}</S.ListElementText>
              <S.ListElementText
                css={css`
                  text-align: end;
                `}
              >
                {timeFormatting(data.timestamp)}
              </S.ListElementText>
            </S.ListElement>
          ))}
      </S.ListWrapper>
    </S.AttackLogSection>
  );
};

export default AttackLog;
