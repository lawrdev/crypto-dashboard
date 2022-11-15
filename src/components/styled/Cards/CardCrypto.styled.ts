import styled from "styled-components";

interface StyledCardCryptoGrowthProps {
  screen: string;
  growth: string;
}

export const StyledCardCrypto = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 410px;
`;

export const StyledCardCryptoGrowth = styled.p<StyledCardCryptoGrowthProps>`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.016em;

  color: ${(props) =>
    props.growth === "gain"
      ? props.theme.colors.green500
      : props.theme.colors.pink500};

  text-align: end;
  display: ${(props) => (props.screen === "desktop" ? "none" : "block")};

  @media (min-width: 428px) {
    text-align: start;
    display: ${(props) => (props.screen === "mobile" ? "none" : "block")};
    padding-top: ${(props) => (props.screen === "mobile" ? "0px" : "16px")};
  }
`;

export const StyledCardCryptoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: fit-content;
    img {
      width: 40px;
      height: 40px;
      object-fit: cover;
    }
  }
  span {
    margin: 20px 0px 9px;
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.016em;
  }
  .price {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.016em;
    color: ${({ theme }) => theme.colors.text900};
  }
`;

export const StyledCardCryptoGraph = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    width: 100%;
    max-width: 104px;
    img {
      width: 100%;
      height: auto;
      object-fit: cover;
      object-position: center top;
    }
  }

  @media (min-width: 428px) {
    justify-content: center;
  }
`;
