import styled from "styled-components";

interface StyledMarketOverviewTopProps {
  growth: number;
}

export const StyledMarketOverview = styled.div`
  background: #ffffff;
  border-radius: 16px;
  min-width: 285px;
  max-height: 386px;
  overflow: hidden;

  margin-inline: auto;
`;

export const StyledMarketOverviewTop = styled.div<StyledMarketOverviewTopProps>`
  margin-bottom: 20px;
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .marketcap {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: ${(props) =>
      props.growth > 0
        ? props.theme.colors.green500
        : props.theme.colors.pink500};
  }
`;
