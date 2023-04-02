import styled from "@emotion/styled";
import { Section } from "components/Section/style";

export const TrafficSection = styled(Section)`
  width: 74.7%;
  background: #ffffff;
  border-radius: 0.5rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TrafficCategoryWrap = styled.div`
  font-weight: 700;
  font-size: 0.875rem;
  display: flex;
`;

export const TrafficCategory = styled.div`
  margin-right: 2rem;
  display: flex;
`;

export const TrafficValueCategory = styled.p`
  color: #a4ada6;
  margin-right: 0.25rem;
`;

export const TrafficValue = styled.p`
  color: #000000;
`;
