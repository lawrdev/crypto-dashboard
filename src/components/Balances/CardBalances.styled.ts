import styled from "styled-components";

export const StyledCardBalances = styled.div`
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StyledCardBalancesCurrency = styled.div`
  div {
    display: flex;
    align-items: center;
    gap: 5px;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.016em;
    color: ${(props) => props.theme.colors.text900};
  }

  p {
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    color: ${(props) => props.theme.colors.blue500};
  }
`;

export const StyledCardBalancesBody = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
    object-position: center;
  }
`;
