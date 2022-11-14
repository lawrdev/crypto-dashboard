import styled from "styled-components";

export const StyledHeaderTimer = styled.div`
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
