import styled from "styled-components";

interface StyledButtonProps {
  $color: "primary" | "secondary"; //primary(green500) or seondary(blue500)
}
export const StyledButton = styled.button<StyledButtonProps>`
  background-color: ${(props) =>
    props.$color === "primary"
      ? props.theme.colors.green500
      : props.theme.colors.blue500};
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
        ? props.theme.colors.green700
        : props.theme.colors.blue700};
  }

  &:active {
    transform: scale(0.95);
  }
`;
