import { StyledButtonImage } from "./ButtonImage.styled";

interface ButtonImageProps {
  image: string;
  alt: string;
}

export const ButtonImage = ({ image, alt }: ButtonImageProps) => {
  return (
    <StyledButtonImage>
      <img src={image} alt={alt} />
    </StyledButtonImage>
  );
};
