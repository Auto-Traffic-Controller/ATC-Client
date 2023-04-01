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
  width: 91.6%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginButton = styled.button`
  border: 1px solid #e1e4e2;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  border-radius: 3.5rem;
  margin-left: 1.68rem;
`;

export const LoginText = styled.p`
  font-weight: 500;
  font-size: 1rem;
  color: #303632;
  margin: 0.5rem;
  margin-left: 0.875rem;
`;
