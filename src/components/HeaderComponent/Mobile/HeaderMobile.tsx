import { useState } from "react";
import {
  StyledHeaderMobile,
  StyledHeaderMobileBottom,
} from "./HeaderMobile.styled";
import Logo from "../../../assets/img/logo.png";
import Avatar from "@mui/material/Avatar";
import Person from "../../../assets/img/person.png";
import { ButtonImage } from "../../ButtonImage";
import SvgIconLoader from "../../SvgIconLoader";
import Divider from "../../Divider";
import dayjs from "dayjs";

export default function HeaderMobile() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <StyledHeaderMobile>
        <div className="containerHeader">
          <div className="menu" onClick={() => setOpenMenu(!openMenu)}>
            <SvgIconLoader iconName="menu" />
          </div>

          <div className="logo">
            <ButtonImage image={Logo} alt="logo" />
          </div>

          <div className="pfpContainer">
            <SvgIconLoader iconName="notif" />
            <div>
              <Avatar alt="Kruluz Utsman" src={Person} variant="rounded" />
            </div>
          </div>
        </div>

        <Divider />

        <StyledHeaderMobileBottom>
          <p>Hello Kruluz</p>
          <span>{dayjs().format("DD MMM YYYY")}</span>
        </StyledHeaderMobileBottom>
      </StyledHeaderMobile>
    </>
  );
}
