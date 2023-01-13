import styled from "styled-components";

interface SvgStyledProps {
  variant?: string;
}
export const SvgStyled = styled.span<SvgStyledProps>`
  display: block;
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme, variant }) =>
    variant === "loading" ? theme.sc.colors.text700 : "none"};
  border-radius: 6px;
`;
