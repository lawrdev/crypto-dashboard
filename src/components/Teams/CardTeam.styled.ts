import styled from "styled-components";

export const StyledCardTeam = styled.div`
  margin-top: 16px;
`;

export const StyledCardTeamAdmin = styled.div`
  margin-bottom: 16px;

  background: rgba(120, 62, 253, 0.1);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  .team-item {
    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.016em;

      color: ${(props) => props.theme.colors.text900};
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.02em;

      color: ${(props) => props.theme.colors.text400};
    }
  }
`;
export const StyledCardTeamMember = styled.div`
  background: rgba(0, 222, 163, 0.2);
  border-radius: 12px;

  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;

  .team-item {
    h3 {
      font-weight: 500;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.016em;

      color: ${(props) => props.theme.colors.text900};
    }
    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.02em;

      color: ${(props) => props.theme.colors.text400};
    }
  }
`;
