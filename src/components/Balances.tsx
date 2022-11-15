import React from "react";
import {
  StyledCard,
  StyledCardHeader,
  StyledCardTitle,
} from "./styled/Cards/Card.styled";
import {
  StyledCardBalances,
  StyledCardBalancesCurrency,
  StyledCardBalancesBody,
} from "./styled/Cards/CardBalances.styled";
import Img from "../assets/img/balances_image.png";
import Button from "./Button";
import SvgIconLoader from "./SvgIconLoader";

interface BalancesProps {
  data?: { value: number };
}

const balanceData: BalancesProps = {
  data: { value: 9784.79 },
};
function Balances(props: BalancesProps) {
  return (
    <StyledCard $variant="default">
      <StyledCardHeader>
        <StyledCardTitle>Balances</StyledCardTitle>

        <Button color="primary" icon="plus" />
      </StyledCardHeader>
      <StyledCardBalances>
        <StyledCardBalancesCurrency>
          <SvgIconLoader iconName="dollar_sign" />
          Dollar
        </StyledCardBalancesCurrency>
        <p>{balanceData.data?.value}</p>
      </StyledCardBalances>
      <StyledCardBalancesBody>
        <img alt="credit card" src={Img} />
      </StyledCardBalancesBody>
    </StyledCard>
  );
}

export default Balances;
