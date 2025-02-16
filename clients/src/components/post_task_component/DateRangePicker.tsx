import { Button, IconButton } from "@mui/material";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateRangePickerProps {
  open: boolean;
  onClose: () => void; // Function to close the picker
  PickerDate: (dates: [Date | null, Date | null]) => void;
  value: [Date | null, Date | null];
  fromLabel: string; // Custom label for "From" date
  toLabel: string; // Custom label for "To" date
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({
  open,
  onClose,
  PickerDate,
  value,
  fromLabel,
  toLabel,
}) => {
  if (!open) return null; // Hide the picker when not needed

  return (
    <div
      style={{
        position: "absolute",
        zIndex: 1000,
        background: "var(--background-color)",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "var(--box-shadow-light)",
        display: "grid",
      }}
    >
      <DatePicker
        selected={value[0]} // Start Date
        onChange={(update) => {
          PickerDate(update as [Date | null, Date | null]); // Update start & end date
        }}
        startDate={value[0]} // Set start date
        endDate={value[1]} // Set end date
        selectsRange
        inline
      />
      <Button variant="outlined" sx={{ mt: 1 }} onClick={onClose} size="small">
        Close
      </Button>
    </div>
  );
};

export default DateRangePicker;
// {dateRange[0] && dateRange[1] && (
//   <p>
//     {dateRange[0].toDateString()}
//     <br />
//     {dateRange[1].toDateString()}
//   </p>
// )}