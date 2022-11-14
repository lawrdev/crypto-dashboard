import { useState } from "react";
import Card from "../components/Card";
import { StyledDashboard } from "../components/styled/Dashboard/Dashboard.styled";
import GrowthY from "../assets/img/growth_yes.png";
import GrowthN from "../assets/img/growth_no.png";
import BNB from "../assets/img/coinBNB.png";
import LTC from "../assets/img/coinLTC.png";
import SvgIconLoader from "../components/SvgIconLoader";
import {
  StyledCardCrypto,
  StyledCardCryptoGrowth,
  StyledCardCryptoDetails,
  StyledCardCryptoGraph,
} from "../components/styled/CardCrypto.styled";

interface DataProps {
  name: string;
  price: number;
  growth: number;
  src: string;
}
type ItemArr = DataProps[];

const data: ItemArr = [
  {
    name: "BNB",
    price: 12230.74,
    growth: 9.5,
    src: BNB,
  },
  {
    name: "LTC",
    price: 8741.19,
    growth: -6.5,
    src: LTC,
  },
];

function DashBoard() {
  return (
    <StyledDashboard>
      <section>
        {data.map((item, index: number) => (
          <div className="my-4" key={index}>
            <Card variant="crypto">
              <StyledCardCrypto>
                <StyledCardCryptoDetails>
                  <div>
                    <img alt="coin" src={item.src} />
                  </div>
                  <div>
                    <span>
                      {item.name} <SvgIconLoader iconName="convert" /> USD
                    </span>
                    <p className="price">{item.price}</p>
                  </div>
                  <StyledCardCryptoGrowth
                    growth={item.growth > 0 ? "gain" : "loss"}
                    screen="desktop"
                  >
                    {item.growth}%
                  </StyledCardCryptoGrowth>
                </StyledCardCryptoDetails>

                <StyledCardCryptoGraph>
                  <StyledCardCryptoGrowth
                    screen="mobile"
                    growth={item.growth > 0 ? "gain" : "loss"}
                  >
                    {item.growth}%
                  </StyledCardCryptoGrowth>
                  <div>
                    <img
                      alt="growth"
                      src={item.growth > 0 ? GrowthY : GrowthN}
                    />
                  </div>
                </StyledCardCryptoGraph>
              </StyledCardCrypto>
            </Card>
          </div>
        ))}
      </section>
    </StyledDashboard>
  );
}

export default DashBoard;
