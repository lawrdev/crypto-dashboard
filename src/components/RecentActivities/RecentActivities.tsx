import Card from "../shared/Card/ComponentCard/Card";
import {
  StyledCardHeader,
  StyledCardTitle,
} from "../shared/Card/ComponentCard/Card.styled";
import {
  StyledCardRecentActivities,
  StyledRecentActivitiesItemCol,
  StyledRecentActivitiesItemCol2,
  StyledRecentActivitiesWrapper,
} from "./CardRecentActivities.styled";
import dayjs from "dayjs";
import BTC from "../assets/img/coinBTC.png";

interface DataProps {
  coin: string;
  currency: string;
  time: string;
  account: number;
  status: string;
}

const data: DataProps = {
  coin: BTC,
  currency: "Bitcoin",
  time: dayjs().format("h:mm:ss A"),
  account: 1545.0, // TODO: use money formatter
  status: "completed",
};

function RecentActivities() {
  return (
    <Card variant="default">
      <StyledCardHeader>
        <StyledCardTitle>Recent Activities</StyledCardTitle>
      </StyledCardHeader>

      <StyledCardRecentActivities>
        <StyledRecentActivitiesWrapper>
          <StyledRecentActivitiesItemCol>Coins</StyledRecentActivitiesItemCol>
          <StyledRecentActivitiesItemCol2 $type="image">
            <img alt="coin" src={data.coin} />
          </StyledRecentActivitiesItemCol2>
        </StyledRecentActivitiesWrapper>

        <StyledRecentActivitiesWrapper>
          <StyledRecentActivitiesItemCol>
            Currency
          </StyledRecentActivitiesItemCol>
          <StyledRecentActivitiesItemCol2 $type="text">
            {data.currency}
          </StyledRecentActivitiesItemCol2>
        </StyledRecentActivitiesWrapper>

        <StyledRecentActivitiesWrapper>
          <StyledRecentActivitiesItemCol>Time</StyledRecentActivitiesItemCol>
          <StyledRecentActivitiesItemCol2 $type="text">
            {data.time}
          </StyledRecentActivitiesItemCol2>
        </StyledRecentActivitiesWrapper>

        <StyledRecentActivitiesWrapper>
          <StyledRecentActivitiesItemCol>Account</StyledRecentActivitiesItemCol>
          <StyledRecentActivitiesItemCol2 $type="text">
            {data.account >= 0 ? `+${data.account}` : `-${data.account}`}
          </StyledRecentActivitiesItemCol2>
        </StyledRecentActivitiesWrapper>

        <StyledRecentActivitiesWrapper>
          <StyledRecentActivitiesItemCol>Status</StyledRecentActivitiesItemCol>
          <StyledRecentActivitiesItemCol2 $type="status">
            {data.status}
          </StyledRecentActivitiesItemCol2>
        </StyledRecentActivitiesWrapper>
      </StyledCardRecentActivities>
    </Card>
  );
}

export default RecentActivities;
