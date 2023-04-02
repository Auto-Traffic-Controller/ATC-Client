import pallete from "styles/pallete";
import styled from "@emotion/styled";
import { Section } from "components/Section/style";

interface UsageChartType {
  percentage: number;
  fillColor: string;
}

export const UsageSection = styled(Section)`
  width: 24.3%;
  background: #ffffff;
  border-radius: 0.5rem;
`;

export const UsageChart = styled.div<UsageChartType>`
  width: 21rem;
  height: 14rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-weight: 700;
  font-size: 2.5rem;
  margin: 0 auto 2rem;
  &::after {
    content: "";
    width: 21rem;
    height: 21rem;
    border: 20px solid;
    border-color: rgba(0, 0, 0, 0.15)
      ${({ percentage, fillColor }) =>
        percentage > 60 ? fillColor : "rgba(0, 0, 0, 0.15)"}
      ${({ percentage, fillColor }) =>
        percentage > 25 ? fillColor : "rgba(0, 0, 0, 0.15)"}
      ${({ fillColor }) => fillColor};
    position: absolute;
    border-radius: 50%;
    left: 0;
    top: 0;
    box-sizing: border-box;
    transform: rotate(
      calc(
        1deg *
          (
            ${({ percentage }) => -70 + percentage / 2} +
              ${({ percentage }) => percentage} * 1.8
          )
      )
    );
  }
`;

export const UsagePercentage = styled.p`
  font-weight: 700;
  font-size: 2.5rem;
  position: absolute;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
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
