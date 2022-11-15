import styled from "styled-components";

export const StyledCardBalancesCurrency = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.016em;
  color: ${(props) => props.theme.colors.text900};
`;

export const StyledCardBalances = styled.div`
  margin-block: 8px;

  p {
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    color: ${(props) => props.theme.colors.blue500};
  }
`;

export const StyledCardBalancesBody = styled.div`
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    object-position: center bottom;
  }
`;
