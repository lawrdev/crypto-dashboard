import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding-inline-end: 12px;
`;

export const StyledCoinWrapper = styled.div`
  padding: 20px 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.sc.breakpoints.md}) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 20px;
    justify-content: space-between;
  }
`;

export const StyledMarketandBalance = styled.div`
  margin: 20px 0px;
`;
