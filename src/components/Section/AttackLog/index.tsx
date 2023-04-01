import { SectionTitle } from "components/Section/style";
import * as S from "./style";
import { css } from "@emotion/react";

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

const AttackLog: React.FC = () => {
  return (
    <S.AttackLogSection>
      <S.SectionHeader>
        <SectionTitle>공격 로그</SectionTitle>
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
