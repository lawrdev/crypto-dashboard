import { FC } from "react";
import { StyledButtonImage } from "./styled/ButtonImage.styled";

interface ButtonImageProps {
  img: string;
}

export const ButtonImage: FC<ButtonImageProps> = ({ img }) => {
  return <StyledButtonImage img={img} />;
};
