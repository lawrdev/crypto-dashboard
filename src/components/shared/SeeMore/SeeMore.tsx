import { StyledSeeMore } from "./SeeMore.styled";
import SvgIconLoader from "../SvgIconLoader/SvgIconLoader";

function SeeMore() {
  return (
    <StyledSeeMore>
      <SvgIconLoader iconName="arrow_down" />
      <p>See more</p>
    </StyledSeeMore>
  );
}

export default SeeMore;
