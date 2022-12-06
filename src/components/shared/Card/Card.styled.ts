import styled from "styled-components";

interface CardProps {
  $variant?: "default" | "custom";
}

export const StyledCard = styled.div<CardProps>`
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;

  max-width: ${(props) => (props.$variant === "default" ? "335px" : "100%")};

  width: 100%;
  margin-inline: auto;
`;

export const StyledCardTitle = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  margin-block-end: 6px;

  letter-spacing: 0.016em;
  color: ${({ theme }) => theme.colors.text900};
`;

export const StyledCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
