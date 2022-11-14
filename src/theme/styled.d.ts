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

      green500: string;
      pink500: string;
    };
  }
}
