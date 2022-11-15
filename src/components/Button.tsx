import { ReactNode } from "react";
import { StyledButton } from "./styled/Buttons/Button.styled";
import SvgIconLoader from "./SvgIconLoader";

interface ButtonProps {
  color: "primary" | "secondary";
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
