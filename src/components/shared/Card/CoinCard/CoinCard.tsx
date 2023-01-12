import { ReactNode } from "react";
import SvgIconLoader from "../../SvgIconLoader/SvgIconLoader";
import {
  StyledCoinChart,
  StyledCoinCompare,
  StyledCoinDets,
  StyledCoinValue,
  StyledCoinValueAvgGain,
  StyledCoinValueAvgLoss,
  StyledImageWrapper,
  StyledWrapper,
} from "./CoinCard.styled";
import Growth_image from "../../../../assets/img/growth_yes.png";
import Loss_image from "../../../../assets/img/growth_no.png";

interface CardProps {
  image: string;
  gain: boolean;
  coin: string;
  value: string;
  valueAvg: string;
}

function CoinCard({ image, gain, coin, value, valueAvg }: CardProps) {
  return (
    <StyledWrapper>
      <StyledCoinDets>
        <StyledImageWrapper>
          <img src={image} alt="coin" />
        </StyledImageWrapper>

        <StyledCoinCompare>
          {coin}
          <SvgIconLoader iconName="convert" />
          USD
        </StyledCoinCompare>
        <StyledCoinValue>{value}</StyledCoinValue>

        {gain ? (
          <StyledCoinValueAvgGain>{valueAvg}%</StyledCoinValueAvgGain>
        ) : (
          <StyledCoinValueAvgLoss>{valueAvg}%</StyledCoinValueAvgLoss>
        )}
      </StyledCoinDets>

      <StyledCoinChart>
        {gain ? (
          <img src={Growth_image} alt="growth chart" />
        ) : (
          <img src={Loss_image} alt="loss chart" />
        )}
      </StyledCoinChart>
    </StyledWrapper>
  );
}

export default CoinCard;
