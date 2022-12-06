import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/StyledTheme";
import GlobalStyles from "./theme/Globals";
import DashBoard from "./pages/DashBoard/DashBoard";
import Layout from "./layout/Layout";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<DashBoard />} />
              <Route path="/*" element={<DashBoard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
