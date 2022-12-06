import styled from "styled-components";

export const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 32px;

  div.gridItem1 {
    grid-column: span 3 / span 3;
  }

  div.gridItem2 {
    grid-column: span 1 / span 1;
  }
`;
