import styled from "styled-components";

export const StyledWrapper = styled.div``;

export const StyledCoinWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
  }
`;
