import styled from "@emotion/styled";
import pallete from "styles/pallete";

export const Header = styled.header`
  width: 100%;
  height: 4.5rem;
  background: ${pallete.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContents = styled.div`
  width: 79.75%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrap = styled.button`
  display: flex;
  align-items: center;
`;

export const LogoText = styled.p`
  font-weight: 400;
  font-size: 1.625rem;
  margin-left: 0.5rem;

  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  font-family: "GmarketSansMedium";
`;

export const LoginButton = styled.button`
  border: 1px solid #e1e4e2;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  border-radius: 3.5rem;
`;

export const LoginText = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #303632;
  margin: 0.5rem;
  margin-left: 0.875rem;
`;
