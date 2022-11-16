import { FC } from "react";
import { StyledButtonImage } from "./styled/Buttons/ButtonImage.styled";

interface ButtonImageProps {
  img: string;
}

export const ButtonImage: FC<ButtonImageProps> = ({ img }) => {
  return <StyledButtonImage img={img} />;
};
