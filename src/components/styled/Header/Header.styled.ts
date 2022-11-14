import styled from "styled-components";

export const StyledHeader = styled.header`
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
