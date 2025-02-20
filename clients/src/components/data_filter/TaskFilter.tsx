import React, { useState } from "react";
import {
  Stack,
  TextField,
  MenuItem,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import "./task-filter.css";
import ButtonComponent from "../Buttons/ButtonComponent";
// Task Data Interface
interface TaskData {
  title: string;
  price: string;
  location: string;
  flexible: string;
  status: string;
  date: string;
  requested: number;
  author_img: boolean;
  author: string;
  author_name: string;
}

// Filter Component Props
interface FilterProps {
  data: TaskData[];
  results: (filteredData: TaskData[]) => void;
}

const TaskFilter: React.FC<FilterProps> = ({ data, results }) => {
  // State for filter options
  const [location, setLocation] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [flexible, setFlexible] = useState<boolean>(false);
  const [priceRange, setPriceRange] = useState<string>("");
  const [OfferRange, setOfferRange] = useState<string>("");

  // Function to apply filters
  const applyFilter = () => {
    const filteredData = data.filter((task) => {
      const priceValue = parseInt(task.price.replace("$", "")); // Convert price to number
      const requestedValue = task.requested;

      // Handle the filtering logic
      return (
        (location ? task.location.includes(location) : true) &&
        (status ? task.status === status : true) &&
        (flexible ? task.flexible === "Yes" : true) &&
        (priceRange === "Below $500" ? priceValue < 500 : true) &&
        (priceRange === "$500 - $1000"
          ? priceValue >= 500 && priceValue <= 1000
          : true) &&
        (priceRange === "Above $1000" ? priceValue > 1000 : true) &&
        (OfferRange === "5 - 10"
          ? requestedValue >= 5 && requestedValue <= 10
          : true) &&
        (OfferRange === "10 - 50"
          ? requestedValue >= 10 && requestedValue <= 50
          : true) &&
        (OfferRange === "Under 100" ? requestedValue < 100 : true)
      );
    });

    results(filteredData);
  };

  return (
    <div className="filter_box">
      <h2 className="mb-3 task_filter_title">Filter</h2>
      {/* Location Filter */}
      <Stack direction="column" spacing={2}>
        <TextField
          fullWidth
          select
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          size="small"
        >
          <MenuItem value="">All</MenuItem>
          {data.map((i) => (
            <MenuItem value={i.location} key={i.location}>
              {i.location}
            </MenuItem>
          ))}
        </TextField>

        {/* Status Filter */}
        <TextField
          fullWidth
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          size="small"
        >
          <MenuItem value="">All</MenuItem>
          {[...new Set(data.map((i) => i.status))].map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </TextField>

        {/* Flexible Filter */}
        <FormControlLabel
          control={
            <Checkbox
              checked={flexible}
              onChange={(e) => setFlexible(e.target.checked)}
            />
          }
          label="Flexible"
        />

        {/* Price Range Filter */}
        <TextField
          fullWidth
          select
          label="Price Range"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          size="small"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="Below $500">Below $500</MenuItem>
          <MenuItem value="$500 - $1000">$500 - $1000</MenuItem>
          <MenuItem value="Above $1000">Above $1000</MenuItem>
        </TextField>

        {/* Offer Range Filter */}
        <TextField
          fullWidth
          select
          label="Offer Range"
          value={OfferRange}
          onChange={(e) => setOfferRange(e.target.value)}
          size="small"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="5 - 10">5 - 10</MenuItem>
          <MenuItem value="10 - 50">10 - 50</MenuItem>
          <MenuItem value="Under 100">Under 100</MenuItem>
        </TextField>

        {/* Apply Button */}
        <ButtonComponent
          onClick={applyFilter}
          style={{
            background: "var(--primary-color)",
            color: "var(--text-light)",
            textTransform: "capitalize",
          }}
          btn_label={"apply filter"}
          variant={undefined}
          size="medium"
          color={undefined}
        />
      </Stack>
    </div>
  );
};

export default TaskFilter;
