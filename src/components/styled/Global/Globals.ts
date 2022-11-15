import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: 'Poppins', 'Inter', 'Avenir', 'Helvetica', 'Arial', sans-serif;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.body};
        /* text default */
        color: ${({ theme }) => theme.colors.text900};

        height: 100vh;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
    }
`;

export default GlobalStyles;
