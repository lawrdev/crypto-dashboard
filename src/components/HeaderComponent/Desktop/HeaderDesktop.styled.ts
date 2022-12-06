import styled from "styled-components";

export const StyledHeaderDesktop = styled.header`
  padding-inline-end: 12px;
  padding-block: 22px;
  display: flex;
  align-items: center;
  justify-content: end;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: space-between;
  }
`;

export const StyledWelcome = styled.data`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  h2 {
    font-weight: 600;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.016em;

    color: ${({ theme }) => theme.colors.text900};
  }

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.02em;
    color: ${({ theme }) => theme.colors.text700};
  }
`;

export const StyledSearchWrapper = styled.div`
  height: 48px;

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  gap: 8px;

  background: #ffffff;
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
export const StyledSearchInput = styled.input.attrs({ type: "text" })`
  border: 0;
  color: ${({ theme }) => theme.colors.text600};
  width: 175px;

  &:focus {
    outline: 0;
    border: 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 20vw;
  }
`;

export const StyledProfileWrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 16px;

  .notif {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;

    background: #ffffff;
    box-shadow: 0px 4px 16px rgba(0, 153, 112, 0.08);
    border-radius: 8px;
  }
`;
export const StyledProfile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0px;
  gap: 8px;

  p {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.016em;

    color: ${({ theme }) => theme.colors.text900};
  }
`;
