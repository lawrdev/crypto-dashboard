import { StyledHeader } from "./styled/Header/Header.styled";
import { StyledHeaderTimer } from "./styled/Header/HeaderTimer.styled";
import Logo from "../assets/img/logo.png";
import Pfp from "../assets/img/pfp.png";
import { ButtonImage } from "./ButtonImage";
import SvgIconLoader from "./SvgIconLoader";
import Divider from "./Divider";
import dayjs from "dayjs";

export default function Header() {
  return (
    <>
      <StyledHeader>
        <div className="containerHeader">
          <div className="menu">
            <SvgIconLoader iconName="menu" />
          </div>

          <div className="logo">
            <img alt="logo" src={Logo} />
          </div>

          <div className="pfpContainer">
            <SvgIconLoader iconName="notif" />
            <div>
              <img alt="profile" src={Pfp} />
            </div>
          </div>

          <ButtonImage img={Logo} />
        </div>

        <Divider />

        <StyledHeaderTimer>
          <p>Hello Lawrence Ugoh</p>
          <span>{dayjs().format("DD MMM YYYY")}</span>
        </StyledHeaderTimer>
      </StyledHeader>
    </>
  );
}
