import styled from "styled-components";

interface CardProps {
  variant?: string;
}

export const StyledCard = styled.div<CardProps>`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;

  max-width: ${(props) => (props.variant === "crypto" ? "335px" : "100%")};

  width: 100%;
  margin-inline: auto;
`;
