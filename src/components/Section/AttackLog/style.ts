import styled from "@emotion/styled";
import { Section } from "components/Section/style";

export const AttackLogSection = styled(Section)`
  width: 49.5%;
  height: 28.875rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ListHeader = styled.div`
  background: #f7f7f8;
  border-radius: 0.25rem;
  height: 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
`;

export const ListHeaderText = styled.p`
  width: 28%;
  color: #616b64;
  font-weight: 500;
  font-size: 0.875rem;
`;

export const ListWrapper = styled.ul`
  height: 83%;
  overflow-y: scroll;
`;

export const ListElement = styled.li`
  height: 2.5rem;
  padding: 0.75rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.25rem 0;
`;

export const ListElementText = styled.p`
  color: #303632;
  font-weight: 600;
  font-size: 0.75rem;
  width: 28%;
`;
