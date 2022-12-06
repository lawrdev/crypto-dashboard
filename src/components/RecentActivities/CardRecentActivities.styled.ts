import styled from "styled-components";

interface StyledRecentActivitiesRowProps {
  $type?: "text" | "status" | "image";
}

export const StyledCardRecentActivities = styled.div`
  margin-block: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledRecentActivitiesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
`;

export const StyledRecentActivitiesItemCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.text700};

  width: 50%;
`;

export const StyledRecentActivitiesItemCol2 = styled.div<StyledRecentActivitiesRowProps>`
  width: 50%;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${(props) =>
    props.$type === "status"
      ? props.theme.colors.green500
      : props.theme.colors.text700};
`;
