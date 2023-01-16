// import { DefaultTheme } from "styled-components";
import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      // Default green00
      main: "#00DEA3",
    },
    secondary: {
      // default blue800
      main: "#5A55D2",
    },
  },

  sc: {
    borderRadius: {
      xs: "2px",
      sm: "4px",
      md: "8px",
    },

    colors: {
      body: "#EFF3FD",
      sidebarColor: "#fff",

      // text colors
      text900: "#00261c",
      text700: "#707EAE",
      text600: "#AEB6CF",
      text400: "#333333",

      // btn colors
      green500: "#00DEA3",
      green700: "#008c67",
      blue500: "#5A55D2",
      blue700: "#2b2793",

      // crypto loss
      pink500: "#F23985",

      // team admin btn
      purple500: "#783EFD",
      purple700: "#3d02c4",
    },

    breakpoints: {
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
    },

    // box-shadow
    bs: {
      normal: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      large:
        "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    },
  },
});
