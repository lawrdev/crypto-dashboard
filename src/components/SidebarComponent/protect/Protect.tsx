import {
  StyledSidebarProtect,
  StyledSidebarProtectIcon,
} from "../Sidebar.styled";
import SvgIconLoader from "../../SvgIconLoader";

function Protect() {
  return (
    <StyledSidebarProtect>
      <StyledSidebarProtectIcon>
        <SvgIconLoader iconName="protect_icon" />
      </StyledSidebarProtectIcon>

      <h2>Keep you safe!</h2>

      <p>Update your security password, keep your account safe!</p>

      <h3>Update Privacy</h3>
    </StyledSidebarProtect>
  );
}

export default Protect;
