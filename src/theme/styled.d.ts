// import original module declarations
import "styled-components";
import { Theme } from "@mui/material/styles";

// and extend them!

interface CustomTheme {
  sc: {
    borderRadius: {
      xs: string;
      sm: string;
      md: string;
    };

    colors: {
      body: string;
      sidebarColor: string;

      // text colors
      text900: string;
      text700: string;
      text600: string;
      text400: string;

      // btn colors
      green500: string;
      green700: string;
      blue500: string;
      blue700: string;

      // crypto loss
      pink500: string;

      // team admin btn
      purple500: string;
      purple700: string;
    };

    breakpoints: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
    };

    bs: {
      normal: string;
      large: string;
    };
  };
}

// declare module "styled-components" {
//   export interface DefaultTheme {
//     borderRadius: {
//       xs: string; // 2px
//       sm: string; // 4px
//       md: string; // 8px
//     };

//     colors: {
//       // background
//       body: string;
//       sidebarColor: string;

//       text900: string;
//       text700: string;
//       text600: string;
//       text400: string;

//       green500: string; // primary color & gain color
//       green700: string;
//       blue500: string; // secondary color
//       blue700: string;

//       pink500: string; // loss color

//       purple500: string;
//       purple700: string;
//     };

//     breakpoints: {
//       xs: string;
//       sm: string;
//       md: string;
//       lg: string;
//     };
//   }
// }

declare module "@mui/material/styles" {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
