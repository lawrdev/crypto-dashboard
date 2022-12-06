import Button from "../shared/Buttons/Button";
import Graph_mobile_y from "../assets/img/graph_growth_yes.png";
import { StyledCardTitle } from "../shared/Card/Card.styled";
import {
  StyledMarketOverview,
  StyledMarketOverviewTop,
} from "./CardMarketOverview.styled";
import { StyledChart } from "../shared/Chart/Chart.styled";

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
    <div>
      {/* flex grow and grid */}
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
          <div>
            <img alt="graph" src={Graph_mobile_y} />
          </div>
        </StyledChart>
      </StyledMarketOverview>
    </div>
  );
}

export default MarketOverview;
