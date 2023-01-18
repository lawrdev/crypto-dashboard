import { useState } from "react";
import Graph_mobile_y from "../assets/img/graph_growth_yes.png";
import { StyledCardTitle } from "../shared/Card/ComponentCard/Card.styled";
import {
  StyledChartWrapper,
  StyledMarketOverview,
  StyledMarketOverviewTop,
} from "./CardMarketOverview.styled";
import { Box, Button } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface DataProps {
  value: number;
  growth: number;
}

const data: DataProps = {
  value: 72141997.5,
  growth: -25,
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const chartData = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function MarketOverview() {
  const theme = useTheme();
  console.log("coolv", theme.palette.secondary);

  // FIX HORISONTALL VALUES AND REMOVE H & L DESCRIPTORS

  return (
    <StyledMarketOverview>
      <StyledMarketOverviewTop growth={data.growth}>
        <div>
          <StyledCardTitle>Market Overview</StyledCardTitle>
          <p className="marketcap">{`${data.value}(${data.growth}%)`}</p>
        </div>

        <Box>
          <Button color="primary" variant="contained">
            ALL
          </Button>
        </Box>
      </StyledMarketOverviewTop>
      {/* TODO:: reCharts */}
      <StyledChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={500}
            height={400}
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorValue1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="-5.32%" stopColor="#5A55D2" stopOpacity={0.8} />
                <stop offset="92.18%" stopColor="#5A55D230" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <defs>
              <linearGradient id="colorValue2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5.32%" stopColor="#00DEA3" stopOpacity={0.8} />
                <stop offset="92.18%" stopColor="#00DEA330" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              opacity={0.5}
              vertical={false}
              horizontal={false}
              strokeDasharray="3 3"
            />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stackId="1"
              strokeWidth={2}
              stroke="#5A55D2"
              // fill="#8884d8"
              fill="url(#colorValue1)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stackId="1"
              strokeWidth={2}
              stroke="#00DEA3"
              // fill="#82ca9d"
              fill="url(#colorValue2)"
            />
            {/* <Area
              type="monotone"
              dataKey="amt"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            /> */}
          </AreaChart>
        </ResponsiveContainer>
      </StyledChartWrapper>
    </StyledMarketOverview>
  );
}

export default MarketOverview;
