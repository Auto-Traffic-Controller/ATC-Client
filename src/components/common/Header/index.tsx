import React from "react";
import * as S from "./style";
import { Logo, LoginIcon } from "assets";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.HeaderContents>
        <S.LogoWrap>
          <Logo />
          <S.LogoText>ATC</S.LogoText>
        </S.LogoWrap>
        <S.LoginButton>
          <S.LoginText>로그인</S.LoginText>
          <LoginIcon />
        </S.LoginButton>
      </S.HeaderContents>
    </S.Header>
  );
};

export default Header;
