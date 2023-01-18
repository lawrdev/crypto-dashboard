import styled from "styled-components";

interface StyledMarketOverviewTopProps {
  growth: number;
}

export const StyledMarketOverview = styled.div`
  padding-top: 16px;

  background: #ffffff;
  border-radius: 16px;
  overflow: hidden;
`;

export const StyledMarketOverviewTop = styled.div<StyledMarketOverviewTopProps>`
  padding-inline: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  -moz-box-align: center;

  .marketcap {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: ${(props) =>
      props.growth > 0
        ? props.theme.sc.colors.green500
        : props.theme.sc.colors.pink500};
  }
`;

export const StyledChartWrapper = styled.div`
  margin-top: 40px;
  min-width: 100%;
  max-height: 386px;
  height: clamp(220px, 20vw, 390px);

  position: relative;
`;
