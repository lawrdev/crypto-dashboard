import { SetStateAction, Dispatch } from "react";
import { NavLink } from "react-router-dom";
import { ButtonImage } from "../ButtonImage";
import {
  StyledSidebar,
  StyledSidebarHeader,
  StyledSidebarOption,
  StyledSidebarOptionActive,
  StyledSidebarOptions,
  StyledSidebarTop,
} from "./Sidebar.styled";
import Logo from "../../assets/img/logo.png";
import Divider from "../Divider";
import SvgIconLoader from "../SvgIconLoader";
// import Protect from "./protect/Protect";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";

interface SidebarProps {
  setMenu: Dispatch<SetStateAction<boolean>>;
}
interface SidebarItemsProps {
  item: string;
  route: string;
  icon: string;
  icon_on: string;
  isActive: boolean;
}

const sidebarItems: SidebarItemsProps[] = [
  {
    item: "Dashboard",
    route: "/",
    icon: "dashboard_icon",
    icon_on: "dashboard_icon_on",
    isActive: true,
  },
  {
    item: "Exchange",
    route: "/exchange",
    icon: "exchange_icon",
    icon_on: "exchange_icon_on",
    isActive: false,
  },
  {
    item: "Library",
    route: "/library",
    icon: "library_icon",
    icon_on: "library_icon_on",
    isActive: false,
  },
  {
    item: "Schedules",
    route: "/schedules",
    icon: "schedules_icon",
    icon_on: "schedules_icon_on",
    isActive: false,
  },
  {
    item: "Payouts",
    route: "/payouts",
    icon: "payouts_icon",
    icon_on: "payouts_icon_on",
    isActive: false,
  },
  {
    item: "Settings",
    route: "/settings",
    icon: "settings_icon",
    icon_on: "settings_icon_on",
    isActive: false,
  },
];

function Sidebar() {
  return (
    <Box sx={{ display: { xs: "none", sm: "block" } }}>
      <StyledSidebar>
        <StyledSidebarTop>
          <StyledSidebarHeader>
            <div className="logo">
              <ButtonImage image={Logo} alt="logo" />
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                <h2>ZARVIS</h2>
              </Box>
            </div>

            <Divider />
          </StyledSidebarHeader>

          <StyledSidebarOptions>
            {sidebarItems.map((item, index: number) => (
              <NavLink key={index} to={item.route}>
                {({ isActive }) => (
                  <StyledSidebarOption $activeItem={isActive}>
                    <Tooltip title={item.item} placement="right-end">
                      <div>
                        <SvgIconLoader
                          iconName={isActive ? item.icon_on : item.icon}
                        />
                      </div>
                    </Tooltip>

                    <Box sx={{ display: { xs: "none", md: "block" } }}>
                      <p>{item.item}</p>
                    </Box>

                    {isActive ? (
                      <Box sx={{ display: { xs: "none", md: "block" } }}>
                        <StyledSidebarOptionActive></StyledSidebarOptionActive>
                      </Box>
                    ) : null}
                  </StyledSidebarOption>
                )}
              </NavLink>
            ))}
          </StyledSidebarOptions>
        </StyledSidebarTop>

        {/* <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Protect />
        </Box> */}
      </StyledSidebar>
    </Box>
  );
}

export default Sidebar;
