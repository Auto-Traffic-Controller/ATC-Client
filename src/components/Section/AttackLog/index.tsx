import { SectionTitle } from "components/Section/style";
import * as S from "./style";
import { css } from "@emotion/react";
import { useState } from "react";
import { type } from "os";

const testData = [
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
  {
    IP: "192.168.123.123",
    attackType: "SYN Flooding",
    time: "8시 35분",
  },
];

type NewOrOld = "new" | "old";

const AttackLog: React.FC = () => {
  const [newOrOld, setNewOrOld] = useState<NewOrOld>("new");

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
        {testData.map((data, index) => (
          <S.ListElement key={index}>
            <S.ListElementText>{data.IP}</S.ListElementText>
            <S.ListElementText>{data.attackType}</S.ListElementText>
            <S.ListElementText
              css={css`
                text-align: end;
              `}
            >
              {data.time}
            </S.ListElementText>
          </S.ListElement>
        ))}
      </S.ListWrapper>
    </S.AttackLogSection>
  );
};

export default AttackLog;
