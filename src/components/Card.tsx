import { ReactNode } from "react";
import { StyledCard } from "./styled/Cards/Card.styled";

interface CardProps {
  children: ReactNode;
  variant?: string;
}
function Card({ children, variant }: CardProps) {
  return <StyledCard variant={variant}>{children}</StyledCard>;
}

export default Card;
