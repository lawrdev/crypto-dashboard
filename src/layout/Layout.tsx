import { Outlet } from "react-router-dom";
import Header from "../components/HeaderComponent/Header";
import Sidebar from "../components/SidebarComponent/Sidebar";
import { StyledLayout } from "./Layout.styled";

export default function Layout() {
  return (
    <StyledLayout>
      <Sidebar />

      <div id="content">
        <Header />
        <Outlet />
      </div>
    </StyledLayout>
  );
}
