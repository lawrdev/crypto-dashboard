import styled from "styled-components";

interface SvgStyledProps {
  variant?: string;
}
export const SvgStyled = styled.div<SvgStyledProps>`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme, variant }) =>
    variant === "loading" ? theme.colors.text700 : "none"};
  border-radius: 6px;
`;
