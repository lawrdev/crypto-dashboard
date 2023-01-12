import styled from "styled-components";

interface StyledButtonProps {
  $color: "primary" | "secondary" | "team_admin"; //primary(green500), seondary(blue500), team_admin(purple500)
}
export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.$color === "primary"
      ? props.theme.sc.colors.green500
      : props.$color === "secondary"
      ? props.theme.sc.colors.blue500
      : props.theme.sc.colors.purple500};
  padding: 10px 9.5px;
  display: flex;
  align-items: center;
  gap: 4px;

  box-shadow: 0px 6px 16px rgba(0, 222, 163, 0.06);
  backdrop-filter: blur(7.5px);
  border-radius: 8px;

  /* text */
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #ffffff;

  transition: ease-in-out all 100ms;

  &:hover {
    background-color: ${(props) =>
      props.$color === "primary"
        ? props.theme.sc.colors.green700
        : props.$color === "secondary"
        ? props.theme.sc.colors.blue700
        : props.theme.sc.colors.purple700};
  }

  &:active {
    transform: scale(0.95);
  }
`;
