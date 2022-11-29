import styled from "styled-components";

export const StyledHeaderMobile = styled.header`
  position: relative;

  background: #ffffff;
  position: relative;
  padding-inline: 24px;
  padding-block-start: 24px;
  padding-block-end: 22px;

  .containerHeader {
    margin-block-end: 16px;
    position: relative;
    display: flex;
    justify-content: end;
    align-items: center;

    .menu {
      margin-inline-end: auto;
      cursor: pointer;

      &:active {
        transform: scale(0.95);
      }
    }

    .logo {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }

    .pfpContainer {
      display: flex;
      gap: 24px;
      align-items: center;
      padding: 0px;
    }
  }
`;

export const StyledHeaderMobileBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  gap: 4px;
  margin-top: 16px;

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.016em;
    color: ${({ theme }) => theme.colors.text900};
  }

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text700};
  }
`;
