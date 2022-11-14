import { ReactNode } from "react";
import { StyledCard } from "./styled/Card.styled";

interface ThisProps {
  children: ReactNode;
  variant?: string;
}
function Card({ children, variant }: ThisProps) {
  return <StyledCard variant={variant}>{children}</StyledCard>;
}

export default Card;
