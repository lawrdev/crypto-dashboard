import { ReactNode } from "react";
import { StyledCard } from "./styled/Cards/Card.styled";

interface CardProps {
  children: ReactNode;
  variant?: "default" | "custom";
}
function Card({ children, variant = "default" }: CardProps) {
  return <StyledCard $variant={variant}>{children}</StyledCard>;
}

export default Card;
