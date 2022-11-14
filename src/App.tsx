// import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/StyledTheme";
import GlobalStyles from "./components/styled/Global/Globals";
import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <DashBoard />
      </ThemeProvider>
    </>
  );
}

export default App;
