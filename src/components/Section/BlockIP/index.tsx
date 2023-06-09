import { css } from "@emotion/react";
import { SectionTitle } from "components/Section/style";
import { useState } from "react";
import * as S from "./style";
import { useGetBlockIP } from "apis/block";
import { timeFormatting } from "libs/timeFormatting";

type NewOrOld = "new" | "old";

const BlockIP: React.FC = () => {
  const { blockIP } = useGetBlockIP();
  const [newOrOld, setNewOrOld] = useState<NewOrOld>("new");
  const [countryName, setCountryName] = useState<string>("");
  const countryOptions = new Set<string>();

  // make set data
  blockIP.forEach(({ country_name }) => countryOptions.add(country_name));

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
          <S.AttackTypeFilter onChange={(e) => setCountryName(e.target.value)}>
            <option value="">국가</option>
            {[...countryOptions].map((data, index) => (
              <option key={index} value={data}>
                {data?.slice(0, 8) + (data?.length > 8 ? ".." : "")}
              </option>
            ))}
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
        {(newOrOld === "new" ? blockIP : [...blockIP].reverse())
          .filter(({ country_name }) =>
            countryName ? country_name === countryName : true
          )
          .map((data, index) => (
            <S.ListElement key={index}>
              <S.ListElementText>{data.ip}</S.ListElementText>
              <S.ListElementText>
                {data.country_name?.slice(0, 14) +
                  (data.country_name?.length > 14 ? ".." : "")}
              </S.ListElementText>
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
    </S.BlockIPSection>
  );
};

export default BlockIP;
