import { ReactNode } from "react";
import { StyledButton } from "./Button.styled";
import SvgIconLoader from "../SvgIconLoader/SvgIconLoader";

interface ButtonProps {
  color: "primary" | "secondary" | "team_admin";
  children?: ReactNode;
  icon?: string;
}

function Button({ children, color = "primary", icon }: ButtonProps) {
  return (
    <StyledButton $color={color}>
      {icon && <SvgIconLoader iconName={icon} svgProp={{ stroke: "white" }} />}
      {children}
    </StyledButton>
  );
}

export default Button;
