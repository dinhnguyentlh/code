import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { LineChart, PieChart } from "@mui/x-charts";

export default function ChartPage() {
  const [chart, setChart] = React.useState<string>("0");

  const handleChange = (event: SelectChangeEvent) => {
    setChart(event.target.value);
  };
  return (
    <div className="">
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Chart</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={chart}
          label="Chart"
          onChange={handleChange}
        >
          {/* <MenuItem value=""><em>None</em></MenuItem> */}
          <MenuItem value={"0"}>Bar</MenuItem>
          <MenuItem value={"1"}>Line</MenuItem>
          <MenuItem value={"2"}>Pie</MenuItem>
        </Select>
      </FormControl>
      {chart === "0" ? (
        <BarChart
          series={[
            { data: [2, 5.5, 2, 8.5, 1.5, 5] },
            // { data: [5.5] },
            // { data: [2] },
            // { data: [8.5] },
            // { data: [1.5] },
            // { data: [5] },
          ]}
          height={290}
          xAxis={[{ data: ["1", "2", "3", "5", "8", "10"], scaleType: "band" }]}
          margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
        />
      ) : chart === "1" ? (
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
            },
          ]}
          width={1200}
          height={300}
        />
      ) : (
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 2, label: "1" },
                { id: 1, value: 5.5, label: "2" },
                { id: 2, value: 2, label: "3" },
                { id: 3, value: 8.5, label: "5" },
                { id: 4, value: 1.5, label: "8" },
                { id: 5, value: 5, label: "10" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      )}
    </div>
  );
}
