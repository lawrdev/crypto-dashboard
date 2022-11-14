import styled from "styled-components";

interface ThisProps {
  img: HTMLImageElement | string;
}

export const StyledButtonImage = styled.div<ThisProps>`
  background-color: "white";
`;
