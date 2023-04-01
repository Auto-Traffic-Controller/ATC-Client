import pallete from "styles/pallete";
import styled from "@emotion/styled";
import { Section } from "components/Section/style";

export const UsageSection = styled(Section)`
  width: 28%;
  background: #ffffff;
  border-radius: 0.5rem;
`;

export const StatusBox = styled.div`
  background: ${pallete.gray};
  padding: 1.5rem 1rem;
`;

export const StatusIconWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  border-radius: 0.25rem;
`;

export const StatusIconText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #303632;
  margin-left: 0.5rem;
`;

export const StatusDescription = styled.p`
  font-weight: 500;
  font-size: 0.875rem;
  color: #616b64;
`;
