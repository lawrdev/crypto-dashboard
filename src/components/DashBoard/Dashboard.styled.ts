import styled from "styled-components";

export const StyledWrapper = styled.div`
  padding-inline-end: 12px;
`;

export const StyledGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  grid-gap: 32px;
`;

export const StyledCoinWrapper = styled.div`
  /* padding: 20px 0px; */
  display: flex;
  /* flex-direction: column; */

  grid-area: 1 / 1 / 2 / -1;

  @media (min-width: ${({ theme }) => theme.sc.breakpoints.md}) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 16px;
    justify-content: space-between;
  }
`;

export const StyledMarketandBalance = styled.div`
  margin: 20px 0px;
`;
