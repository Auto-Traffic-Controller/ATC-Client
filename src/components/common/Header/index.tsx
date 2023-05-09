import React from "react";
import * as S from "./style";
import { Logo, LoginIcon, Alarm } from "assets";

const Header: React.FC = () => {
  const userId = "GSM";
  return (
    <S.Header>
      <S.HeaderContents>
        <Logo />
        <S.UserWrap>
          <Alarm />
          <S.LoginButton>
            <S.LoginText>{userId}</S.LoginText>
            <LoginIcon />
          </S.LoginButton>
        </S.UserWrap>
      </S.HeaderContents>
    </S.Header>
  );
};

export default Header;
