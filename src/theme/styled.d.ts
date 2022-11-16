// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      // background
      body: string;

      text900: string;
      text700: string;
      text400: string;

      green500: string; // primary color & gain color
      green700: string;
      blue500: string; // secondary color
      blue700: string;

      pink500: string; // loss color

      purple500: string;
      purple700: string;
    };
  }
}
