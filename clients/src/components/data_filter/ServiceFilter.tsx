import React, { useState } from "react";
import { Button, Stack, TextField, MenuItem } from "@mui/material";
import ButtonComponent from "../Buttons/ButtonComponent";

// Service Data Interface
interface ServiceData {
  id: number;
  title: string;
  category: string;
  hourlyRate: number;
  availability: string;
  warranty: string;
  rating: number | string;
  reviews: number;
}

// Filter Component Props
interface FilterProps {
  data: ServiceData[];
  results: (filteredData: ServiceData[]) => void;
}

const ServiceFilter: React.FC<FilterProps> = ({ data, results }) => {
  // State for filter options
  const [category, setCategory] = useState<string>("");
  const [availability, setAvailability] = useState<string>("");
  const [hourlyRateRange, setHourlyRateRange] = useState<string>("");
  const [warranty, setWarranty] = useState<string>("");
  const [rating, setRating] = useState<number | string>("");

  // Function to apply filters
  const applyFilter = () => {
    const filteredData = data.filter((service) => {
      return (
        (category ? service.category === category : true) &&
        (availability ? service.availability === availability : true) &&
        (hourlyRateRange === "Below $30"
          ? service.hourlyRate < 30
          : hourlyRateRange === "$30 - $60"
          ? service.hourlyRate >= 30 && service.hourlyRate <= 60
          : hourlyRateRange === "Above $60"
          ? service.hourlyRate > 60
          : true) &&
        (warranty ? service.warranty === warranty : true) &&
        (rating ? service.rating >= rating : true)
      );
    });

    results(filteredData);
  };

  return (
    <div className="filter_box">
      <h2 className="mb-3 task_filter_title">Filter</h2>
      <Stack direction="column" spacing={2} justifyContent="start">
        {/* Category Filter */}
        <TextField
          fullWidth
          select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          size="small"
        >
          <MenuItem value="">All</MenuItem>
          {[...new Set(data.map((i) => i.category))].map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        {/* Availability Filter */}
        <TextField
          fullWidth
          select
          label="Availability"
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          size="small"
        >
          <MenuItem value="">All</MenuItem>
          {[...new Set(data.map((i) => i.availability))].map((avail) => (
            <MenuItem key={avail} value={avail}>
              {avail}
            </MenuItem>
          ))}
        </TextField>

        {/* Hourly Rate Range Filter */}
        <TextField
          fullWidth
          select
          label="Hourly Rate"
          value={hourlyRateRange}
          onChange={(e) => setHourlyRateRange(e.target.value)}
          size="small"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="Below $30">Below $30</MenuItem>
          <MenuItem value="$30 - $60">$30 - $60</MenuItem>
          <MenuItem value="Above $60">Above $60</MenuItem>
        </TextField>

        {/* Warranty Filter */}
        <TextField
          fullWidth
          select
          label="Warranty"
          value={warranty}
          onChange={(e) => setWarranty(e.target.value)}
          size="small"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value="Limited Warranty">Limited Warranty</MenuItem>
          <MenuItem value="Full Warranty">Full Warranty</MenuItem>
        </TextField>

        {/* Rating Filter */}
        <TextField
          fullWidth
          select
          label="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          size="small"
        >
          <MenuItem value="">Any</MenuItem>
          <MenuItem value={4}>4 & Above</MenuItem>
          <MenuItem value={4.5}>4.5 & Above</MenuItem>
          <MenuItem value={5}>5</MenuItem>
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

export default ServiceFilter;
