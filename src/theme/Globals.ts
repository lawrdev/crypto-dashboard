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

    *, *::after, *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text900};

        height: 100vh;
        margin: 0;
        padding: 0;
        
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
    }

    h1, h2, h3, h4, h5, h6, ul, li, p {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    section { margin-bottom: 24px }
`;

export default GlobalStyles;
