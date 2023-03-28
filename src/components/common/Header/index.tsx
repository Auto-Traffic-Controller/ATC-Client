import React from "react";
import * as S from "./style";
import { Logo } from "assets";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderContents>
        <S.LogoWrap>
          <Logo />
          <S.LogoText>ATC</S.LogoText>
        </S.LogoWrap>
      </S.HeaderContents>
    </S.Header>
  );
};

export default Header;
