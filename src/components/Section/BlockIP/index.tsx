import { css } from "@emotion/react";
import { SectionTitle } from "components/Section/style";
import { useState } from "react";
import * as S from "./style";
import { useGetBlockIP } from "apis/block";

type NewOrOld = "new" | "old";

const BlockIP: React.FC = () => {
  const { blockIP } = useGetBlockIP();
  const [newOrOld, setNewOrOld] = useState<NewOrOld>("new");

  const selectStyle = (selectedItem: NewOrOld) =>
    newOrOld === selectedItem &&
    css`
      background: #cce6d2;
      color: #49935c;
    `;

  return (
    <S.BlockIPSection>
      <S.SectionHeader>
        <SectionTitle>차단한 IP</SectionTitle>
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
          <S.AttackTypeFilter>
            <option>공격유형</option>
          </S.AttackTypeFilter>
        </S.FilterWrap>
      </S.SectionHeader>
      <S.ListHeader>
        <S.ListHeaderText>IP 주소</S.ListHeaderText>
        <S.ListHeaderText>국가</S.ListHeaderText>
        <S.ListHeaderText
          css={css`
            text-align: end;
          `}
        >
          시간
        </S.ListHeaderText>
      </S.ListHeader>
      <S.ListWrapper>
        {blockIP.map((data, index) => (
          <S.ListElement key={index}>
            <S.ListElementText>{data.ip}</S.ListElementText>
            <S.ListElementText>{data.country_name}</S.ListElementText>
            <S.ListElementText
              css={css`
                text-align: end;
              `}
            >
              {data.timestamp.split(":")[0]}시 {data.timestamp.split(":")[1]}분
            </S.ListElementText>
          </S.ListElement>
        ))}
      </S.ListWrapper>
    </S.BlockIPSection>
  );
};

export default BlockIP;
