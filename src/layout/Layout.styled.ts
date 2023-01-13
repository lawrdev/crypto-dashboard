import styled from "styled-components";

export const StyledLayout = styled.div`
  display: grid;

  grid-template-columns: 1fr;
  grid-template-areas: "main";

  height: 100vh;
  overflow: hidden;

  #sidebar {
    grid-area: sidebar;
  }
  #content {
    grid-area: main;
    overflow-y: auto;
  }

  @media screen and (min-width: ${(props) => props.theme.sc.breakpoints.sm}) {
    grid-template-columns: fit-content(15%) 1fr;

    grid-template-areas:
      "sidebar main main main"
      "sidebar main main main"
      "sidebar main main main"
      "sidebar main main main";

    grid-gap: 12px;
  }

  @media screen and (min-width: ${(props) => props.theme.sc.breakpoints.md}) {
    grid-template-columns: 196px 1fr;

    grid-gap: 22px;
  }
`;
