import { useState } from "react";
import Graph_mobile_y from "../assets/img/graph_growth_yes.png";
import { StyledCardTitle } from "../shared/Card/ComponentCard/Card.styled";
import {
  StyledMarketOverview,
  StyledMarketOverviewTop,
} from "./CardMarketOverview.styled";
import { StyledChart } from "../shared/Chart/Chart.styled";
import { Box, Button } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

interface DataProps {
  value: number;
  growth: number;
}

const data: DataProps = {
  value: 72141997.5,
  growth: -25,
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
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

function MarketOverview() {
  const theme = useTheme();
  console.log("coolv", theme.palette.secondary);
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      {/* flex grow and grid */}
      <StyledMarketOverview>
        <StyledMarketOverviewTop growth={data.growth}>
          <div>
            <StyledCardTitle>Market Overview</StyledCardTitle>
            <p className="marketcap">{`${data.value}(${data.growth}%)`}</p>
          </div>

          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
              <Select
                multiple
                displayEmpty
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>Placeholder</em>;
                  }

                  return selected.join(", ");
                }}
                MenuProps={MenuProps}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem disabled value="">
                  <em>Placeholder</em>
                </MenuItem>
                {names.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, personName, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Button color="primary" variant="contained">
              ALL
            </Button>
          </Box>
        </StyledMarketOverviewTop>

        {/* TODO:: reCharts */}
        {/* <StyledChart>
          <div>
            <img alt="graph" src={Graph_mobile_y} />
          </div>
        </StyledChart> */}
      </StyledMarketOverview>
    </div>
  );
}

export default MarketOverview;
