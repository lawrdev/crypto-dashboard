import styled from "styled-components";

interface StyledButtonImageProps {
  img: HTMLImageElement | string;
}

export const StyledButtonImage = styled.div<StyledButtonImageProps>`
  background-color: "white";
`;
