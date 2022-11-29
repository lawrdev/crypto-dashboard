import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import HeaderDesktop from "./Desktop/HeaderDesktop";
import HeaderMobile from "./Mobile/HeaderMobile";

function Header() {
  return (
    <>
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <HeaderMobile />
      </Box>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <HeaderDesktop />
      </Box>
    </>
  );
}

export default Header;
