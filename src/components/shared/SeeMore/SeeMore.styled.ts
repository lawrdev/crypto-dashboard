import styled from "styled-components";

export const StyledSeeMore = styled.div`
  width: 86px;
  height: 40px;
  margin-inline: auto;
  cursor: pointer;
  padding-inline: 5px;

  filter: drop-shadow(0px 6px 16px rgba(0, 222, 163, 0.06));
  backdrop-filter: blur(7.5px);
  border-radius: 8px;

  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    background-color: #aaaaaa20;
  }

  div {
    width: 16px;
    height: 16px;
  }

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 20px;

    text-align: center;
    letter-spacing: -0.02em;
    color: #00261c;
  }
`;
