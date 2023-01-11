import React from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
} from "../shared/Card/ComponentCard/Card.styled";
import {
  StyledCardBalances,
  StyledCardBalancesCurrency,
  StyledCardBalancesBody,
} from "./CardBalances.styled";
import Img from "../assets/img/balances_image.png";
import Button from "../shared/Buttons/Button";
import SvgIconLoader from "../shared/SvgIconLoader/SvgIconLoader";

interface BalancesProps {
  data?: { value: number };
}

const balanceData: BalancesProps = {
  data: { value: 9784.79 },
};
function Balances(props: BalancesProps) {
  return (
    <StyledCard $variant="default">
      <StyledCardBalances>
        <StyledCardHeader>
          <StyledCardTitle>Balances</StyledCardTitle>

          <Button color="secondary" icon="plus" />
        </StyledCardHeader>

        <StyledCardBalancesCurrency>
          <div>
            <SvgIconLoader iconName="dollar_sign" />
            Dollar
          </div>
          <p>{balanceData.data?.value}</p>
        </StyledCardBalancesCurrency>
      </StyledCardBalances>

      <StyledCardBalancesBody>
        <img alt="credit card" src={Img} />
      </StyledCardBalancesBody>
    </StyledCard>
  );
}

export default Balances;
