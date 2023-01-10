import styled from "styled-components";

export const StyledWrapper = styled.div`
  /* max-width: 255px; */
  /* width: fit-content; */
  padding: 16px;
  background: #ffffff;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition-duration: 300ms;

  &:hover {
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1),
      0 4px 6px -4px rgb(0 0 0 / 0.1);
  }
`;

export const StyledCoinDets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 16px;
`;

export const StyledImageWrapper = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 8px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledCoinCompare = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1px;
  letter-spacing: 0.016em;
  /* Colors/Dark Grey/400 */
  color: #333333;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;
export const StyledCoinValue = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 10px;
  letter-spacing: 0.016em;
  /* Colors/Green/900 */

  color: #00261c;
`;
export const StyledCoinValueAvgGain = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;

  /* Colors/Green/500 - Primary */

  color: #00dea3;
`;
export const StyledCoinValueAvgLoss = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;

  /* Colors/Pink */

  color: #f23985;
`;

export const StyledCoinChart = styled.div`
  /* flex-grow: 1; */
  height: 56px;
  min-width: 104px;

  img {
    width: 100%;
    object-fit: contain;
    object-position: center;
  }

  /* transform: matrix(-1, 0, 0, 1, 0, 0); */
`;

// export const StyledGrowthOrLossWrapper = styled.div`
//   width: auto;
//   height: 56px;
// `;

// export const StyledDashboardCards = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   gap: 16px;

//   margin-bottom: 18px;

//   div {
//     flex-grow: 1;
//   }
// `;

// export const StyledCardCryptoGrowth = styled.p<StyledCardCryptoGrowthProps>`
//   font-weight: 500;
//   font-size: 18px;
//   line-height: 21px;
//   letter-spacing: 0.016em;

//   color: ${(props) =>
//     props.growth === "gain"
//       ? props.theme.colors.green500
//       : props.theme.colors.pink500};

//   text-align: end;
//   display: ${(props) => (props.screen === "desktop" ? "none" : "block")};

//   @media (min-width: 428px) {
//     text-align: start;
//     display: ${(props) => (props.screen === "mobile" ? "none" : "block")};
//     padding-top: ${(props) => (props.screen === "mobile" ? "0px" : "16px")};
//   }
// `;

// export const StyledCardCryptoDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   div {
//     width: fit-content;
//     img {
//       width: 40px;
//       height: 40px;
//       object-fit: cover;
//     }
//   }
//   span {
//     margin: 20px 0px 9px;
//     display: flex;
//     align-items: center;
//     gap: 8px;

//     font-weight: 500;
//     font-size: 16px;
//     line-height: 19px;
//     letter-spacing: 0.016em;
//   }
//   .price {
//     font-weight: 700;
//     font-size: 20px;
//     line-height: 24px;
//     letter-spacing: 0.016em;
//     color: ${({ theme }) => theme.colors.text900};
//   }
// `;

// export const StyledCardCryptoGraph = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;

//   div {
//     width: 100%;
//     max-width: 104px;
//     img {
//       width: 100%;
//       height: auto;
//       object-fit: cover;
//       object-position: center top;
//     }
//   }

//   @media (min-width: 428px) {
//     justify-content: center;
//   }
// `;
