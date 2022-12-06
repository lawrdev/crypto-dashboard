import dayjs from "dayjs";
import SvgIconLoader from "../../shared/SvgIconLoader/SvgIconLoader";
import {
  StyledHeaderDesktop,
  StyledProfile,
  StyledProfileWrapper,
  StyledSearchInput,
  StyledSearchWrapper,
  StyledWelcome,
} from "./HeaderDesktop.styled";
import Avatar from "@mui/material/Avatar";
import Person from "../../../assets/img/person.png";
import Box from "@mui/material/Box";

export default function HeaderDesktop() {
  return (
    <StyledHeaderDesktop>
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <StyledWelcome>
          <h2>Hello Kruluz</h2>
          <p>{dayjs().format("h.mm a D MMM YYYY")}</p>
        </StyledWelcome>
      </Box>

      <Box sx={{ marginInlineEnd: { xs: "20px", md: "0px" } }}>
        <StyledSearchWrapper>
          <SvgIconLoader iconName="search_icon" />

          <StyledSearchInput placeholder="Search" />
        </StyledSearchWrapper>
      </Box>

      <StyledProfileWrapper>
        <div className="notif">
          <SvgIconLoader iconName="notif" />
        </div>

        <StyledProfile>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <p>Kruluz Utsman</p>
          </Box>

          <Avatar
            alt="Kruluz Utsman"
            src={Person}
            variant="rounded"
            sx={{ width: "48px", height: "48px" }}
          />
        </StyledProfile>
      </StyledProfileWrapper>
    </StyledHeaderDesktop>
  );
}
