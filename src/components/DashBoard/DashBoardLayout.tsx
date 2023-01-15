import CoinCard from "../shared/Card/CoinCard/CoinCard";
import {
  StyledCoinWrapper,
  StyledGrid,
  StyledMarketandBalance,
  StyledWrapper,
} from "./Dashboard.styled";
import Btc_image from "../../assets/img/coinBTC.png";
import Ltc_image from "../../assets/img/coinLTC.png";
import Etm_image from "../../assets/img/coinETM.png";
import Bnb_image from "../../assets/img/coinBNB.png";
import MarketOverview from "../MarketOverview/MarketOverview";

interface DataProps {
  image: string;
  gain: boolean;
  coin: string;
  value: string;
  valueAvg: string;
}
const data: DataProps[] = [
  {
    image: Btc_image,
    gain: true,
    coin: "BTC",
    value: "9784.79",
    valueAvg: "7.2",
  },
  {
    image: Ltc_image,
    gain: false,
    coin: "LTC",
    value: "8741.19",
    valueAvg: "5.2",
  },
  {
    image: Etm_image,
    gain: true,
    coin: "ETM",
    value: "4567.16",
    valueAvg: "6.5",
  },
  {
    image: Bnb_image,
    gain: true,
    coin: "BNB",
    value: "6547.79",
    valueAvg: "9.5",
  },
];

function DashBoardLayout() {
  return (
    <StyledWrapper>
      <StyledGrid>
        <StyledCoinWrapper>
          {data.map((item, index: number) => (
            <CoinCard
              key={index}
              image={item.image}
              gain={item.gain}
              coin={item.coin}
              value={item.value}
              valueAvg={item.valueAvg}
            />
          ))}
          {/* reinvent card to accept title */}
        </StyledCoinWrapper>

        <StyledMarketandBalance>
          <MarketOverview />
        </StyledMarketandBalance>
      </StyledGrid>
    </StyledWrapper>
  );
}

export default DashBoardLayout;
