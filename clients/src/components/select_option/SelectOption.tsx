import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";
import React, { useState } from "react";

interface SelectOptionProps {
  options: (string | number)[];
  placeholder: string;
  value: string | number | null;
  onChange: (selected: string | number | null) => void;
}

const SelectOption: React.FC<SelectOptionProps> = ({
  options = [],
  placeholder = "Select an option",
  value,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (option: string | number) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className="position-relative w-100 z-2">
      <button
        style={{
          border: "1px solid white",
          boxShadow: "var(--box-shadow-light)",
        }}
        className="w-100 btn btn-light border-white border-2 d-flex justify-content-between align-items-center"
        onClick={toggleDropdown}
      >
        {value ?? placeholder}
        {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
      </button>
      {isOpen && (
        <ul
          style={{ cursor: "pointer" }}
          className="position-absolute w-100 list-group bg-white border mt-1 shadow-sm"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="list-group-item list-group-item-action"
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SelectOption;
