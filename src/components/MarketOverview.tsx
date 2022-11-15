import Button from "./Button";
import Card from "./Card";
import Graph_mobile_y from "../assets/img/graph_growth_yes.png";
import { StyledCardTitle } from "./styled/Cards/Card.styled";
import {
  StyledMarketOverview,
  StyledMarketOverviewTop,
} from "./styled/Cards/CardMarketOverview.styled";
import { StyledChart } from "./styled/Chart/Chart.styled";

interface DataProps {
  value: number;
  growth: number;
}

const data: DataProps = {
  value: 72141997.5,
  growth: -25,
};

function MarketOverview() {
  return (
    <StyledMarketOverview>
      <StyledMarketOverviewTop growth={data.growth}>
        <div>
          <StyledCardTitle>Market Overview</StyledCardTitle>
          <p className="marketcap">{`${data.value}(${data.growth}%)`}</p>
        </div>

        <Button color="primary" icon="arrow_down">
          ALL
        </Button>
      </StyledMarketOverviewTop>

      {/* TODO:: reCharts */}
      <StyledChart>
        <img alt="graph" src={Graph_mobile_y} />
      </StyledChart>
    </StyledMarketOverview>
  );
}

export default MarketOverview;
